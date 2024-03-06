<script>
  const priorities = [
    {
      value: 1,
      title: "Low",
    },
    {
      value: 2,
      title: "Medium",
    },
    {
      value: 3,
      title: "High",
    },
  ];
</script>

<main class="container mx-auto">
  <div class="text-3xl">
    <form method="POST" action="/">
      <div class="flex flex-col gap-8">
        <label for="title">Title</label>
        <input name="title" type="text" id="title" />
        <label for="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <label for="priority">Priority</label>
        <select name="priority" id="priority">
          {#each priorities as priority}
            <option value={priority.value}>{priority.title}</option>
          {/each}
        </select>
      </div>
    </form>



    <h1 class="text-3xl">List of TODO</h1>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Priority</th>
            </tr>
        </thead>
    </table>
  </div>
</main>
