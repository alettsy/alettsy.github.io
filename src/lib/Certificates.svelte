<script>
    export let certificates;
</script>

<div class="certificates">
    <p>All certificates can be found on my <a href="https://www.linkedin.com/in/alex-betts/">LinkedIn</a>
        profile.</p>
    {#each certificates as certificate}
        <div class="certificate">
            <div class="image">
                <img src={'/certificates/' + certificate.image} alt={certificate.name} class="image"/>
            </div>
            <div class="details">
                <h2 class="name">{certificate.name}</h2>
                <div class="company-date">
                    <div class="company">{certificate.company}</div>
                    <span class="dot">•</span>
                    <div class="date">{certificate.date}</div>
                </div>
                <div class="type">{certificate.type}</div>
            </div>
        </div>
    {/each}
</div>

<style>
    a {
        color: var(--accent-color);
    }

    img {
        width: 350px;
        height: 250px;
    }

    .certificates {
        overflow-y: scroll;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .certificates .certificate:last-child {
        border-bottom: none;
    }

    .certificate {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-evenly;
        padding: 15px 0 15px 0;
        border-bottom: 2px var(--accent-color) solid;
        width: 95%;
    }

    .details {
        text-align: left;
    }

    .name {
        color: var(--accent-color);
        font-weight: bold;
    }

    .company-date {
        display: flex;
    }

    .dot {
        color: var(--accent-color);
        padding: 0 3px 0 3px;
    }

    /* TABLET */
    @media only screen and (min-width: 1200px) {
        .certificates {
            text-align: center;
            display: flex;
            align-items: center;
            width: 100%;
            height: 100vh;
            margin: 0;
        }

        .certificate {
            display: flex;
            flex-direction: row;
            align-content: center;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }

        .name {
            padding-right: 10px;
        }

        .certificate:nth-child(even) .name {
            padding-left: 10px;
        }

        .certificate:nth-child(even) .details {
            text-align: right;
        }

        .certificate:nth-child(even) .company-date {
            flex-direction: row-reverse;
        }

        .certificates .certificate:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
</style>