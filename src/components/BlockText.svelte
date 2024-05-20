<script>
  import { createEventDispatcher, onMount } from 'svelte'
	import BlockMenu from './BlockMenu.svelte';
	import BlockContentEditable from './BlockContentEditable.svelte';

  const dispatch = createEventDispatcher()
  export let style = ''
  export let content = 'no-after';
  export let idx = 0;
  let classAfter = ''
  const onKeyDown = (ev) => {
    const e = ev.detail
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch('enter', { idx })
    }
    if (e.key === 'Backspace' && content.length === 0) {
      e.preventDefault();
      dispatch('backspace', { idx })
    }
    if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      dispatch('move', { idx, direction: e.key })
    }
  };

  const onInput = (ev) => {
    content = ev.detail.target.innerText
    checkAfter()
    dispatch('update', { idx, content })
  }
  const checkAfter = () => {
    if(content.length > 0) {
      classAfter = 'no-after'
    }
  }

  onMount(() => {
    checkAfter()
  })

  
</script>

<div class="block block-text p-1 flex">
  <BlockMenu {idx} />
  <BlockContentEditable classNames={`block-content ${classAfter} ${style}`} {content} on:focus={checkAfter} on:input={onInput} on:keydown={onKeyDown} placeholder="Texto" />
</div>
