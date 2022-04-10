<script context="module" lang="ts">
  export async function load({ params }) {
    return {
      props: {
        tag: params.tag
      }
    };
  }
</script>

<script>
  import PostList from '$lib/components/PostList.svelte';

  export let tag;

  const exampleData = [
    {
      slug: 'basic',
      title: 'Kadang Bingung Sama Manusia 1'
    },
    {
      slug: 'basics',
      title: 'Kadang Bingung Sama Manusia 2'
    },
    {
      slug: 'basicd',
      title: 'Kadang Bingung Sama Manusia 3'
    }
  ];
</script>

<h1 class="text-3xl font-bold">🧵{tag}</h1>

<PostList posts={exampleData} />
