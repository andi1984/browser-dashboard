<script lang="ts">
    import { fly} from 'svelte/transition';
	export let data;
</script>

<style>
    a {
        display: inline-block;
        width: 100%;
        padding-top: 0;
        padding-bottom: 0;
    }
</style>

<div class="card blue-grey darken-1" in:fly={{x:-100}}>
    <a href="{data.url}" class="card-content white-text">
        {data.label}
    </a>
</div>