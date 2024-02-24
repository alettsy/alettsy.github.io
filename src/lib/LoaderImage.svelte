<script>
	export let src;
	export let alt;
	export let width;
	export let height;

	// Just in case anyone is wondering why I didn't just use the
	// `src` property on the `img` tag:
	// I couldn't find a way to show a skeleton while waiting for
	// the image to render, so I created a work-around.
	async function loadImage() {
		const response = await fetch(src, {
			method: 'GET',
			headers: {
				"Content-Type": "image/jpg"
			}
		});

		const reader = response.body.getReader();

		const stream = new ReadableStream({
			start(controller) {
				return pump();

				function pump() {
					return reader.read().then(({done, value}) => {
						if (done) {
							controller.close();
							return;
						}

						controller.enqueue(value);
						return pump();
					});
				}
			},
		});
		const blob = await new Response(stream).blob();
		return URL.createObjectURL(blob);
	}
</script>

{#await loadImage()}
	<div class="skeleton" style={`width:${width}px;height:${height}px;`}/>
{:then image}
	<img {alt} src={image}/>
{/await}

<style>
	img {
		width: 350px;
		height: 250px;
	}

	.skeleton {
		background-color: var(--accent-color-darker);
		background-image: linear-gradient(90deg, var(--accent-color-darker), var(--accent-color), var(--accent-color-darker));
		background-size: 200px 100%;
		background-repeat: no-repeat;
		border-radius: 4px;
		display: inline-block;
		line-height: 1;
		animation: skeletonLoading 2s ease-in-out infinite;
	}

	@keyframes skeletonLoading {
		0% {
			background-position: -200px 0;
		}
		100% {
			background-position: calc(200px + 100%) 0;
		}
	}
</style>