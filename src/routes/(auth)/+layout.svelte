<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
  import "../app.css";
</script>

<body class="bg-gray-100">
  <div class="h-screen flex items-center justify-center">
    <slot />
  </div>
</body>
