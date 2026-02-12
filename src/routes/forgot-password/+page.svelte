<script lang="ts">
    import Dashboard from "@/lib/layouts/Dashboard.svelte";
    import { counter } from "@/lib/store/countable";
</script>

<Dashboard>
    Forgot Password. Your count is <p>{$counter}</p>
</Dashboard>