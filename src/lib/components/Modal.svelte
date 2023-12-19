<script>
    export let label;
    export let checked;
  </script>
  
  <label for={label}>
    <slot name="trigger" />
  </label>
  
  <input type="checkbox" id={label} class="modal-toggle" {checked} hidden />
  {#if checked}
    <label for={label} class=" modal-overlay modal modal-bottom sm:modal-middle ">
      <label for="" class="modal-box">
        <div class="font-bold text-xl text-center">
          <slot name="heading" />
        </div>
        <div class="my-2">
          <slot />
        </div>
        <div class="modal-action justify-center">
          <slot name="actions" />
        </div>
      </label>
    </label>
  {/if}

  <style>
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .modal-container {
      position: relative;
    }
  
    .modal-box {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  </style>