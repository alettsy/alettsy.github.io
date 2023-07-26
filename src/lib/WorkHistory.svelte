<script>
    export let jobs;
</script>

<div class="work-timeline">
    <div class="jobs">
        {#each jobs as job}
            <div class="job">
                <h2 class="title">{job.title}</h2>
                <p class="details">{job.company} • {job.start} - {job.end}</p>
                <ul class="description">
                    {#each job.description as description}
                    <li>{description}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>

<style>
    .work-timeline {
        padding: 20px;
        padding-top: 0px;
        overflow: auto;
        height: 100vh;
    }

    .jobs {
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    .job {
        padding: 20px;
        position: relative;
    }

    .job::before {
        content: "";
        position: absolute;
        width: 50.5%;
        border: solid var(--accent-color-darker);
    }

    .job:nth-child(odd)::before {
        border-width: 5px 0 5px 5px;
        border-radius: 40px 0 0 40px;
        top: 0px;
        left: -5px;
        bottom: -10px;
    }
    
    .job:nth-child(even)::before {
        border-width: 5px 5px 5px 0;
        border-radius: 0 40px 40px 0;
        top: 5.5px;
        right: -5px;
        bottom: -5px;
    }

    .job:first-child::before {
        border-top: 0;
        border-top-left-radius: 0;
    }

    .job:last-child::before {
        border-bottom: 0;
        border-bottom-right-radius: 0;
    }

    .job:last-child {
        padding-bottom: 100px;
    }

    .title::before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background: var(--accent-color);
        border-radius: 999px;
        border: 3px solid var(--accent-color-darker);
        top: 48px;
    }

    .job:nth-child(odd) > .title::before {
        left: -12.5px;
    }

    .job:nth-child(even) > .title::before {
        right: -12.5px;
    }

    .title {
        color: var(--accent-color);
        margin-bottom: 0;
    }

    .details {
        margin-top: 0;
        padding-top: 0;
    }

    @media only screen and (min-width: 480px) {
        .jobs {
            width: 90%;
        }
    }

    @media only screen and (min-width: 1000px) {
        .jobs {
            width: 80%;
        }

        .job:last-child {
            padding-bottom: 40px;
        }
    }

    @media only screen and (min-width: 1200px) {
        .jobs {
            width: 70%;
        }
    }
</style>