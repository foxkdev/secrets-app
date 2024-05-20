<script>
    import { createEventDispatcher } from 'svelte'

  export let content = ''
  export let placeholder = '';
  export let classNames = ''

  const dispatch = createEventDispatcher()
  const onFocus = (e) => {
    dispatch('focus', e)
  }

  const onInput = (e) => {
    content = e.target.innerText
    dispatch('input', e)
  }

  const onKeyDown = (e) => {
    // console.log('Keydown', e)
    dispatch('keydown', e)
  }
</script>


<div class={`w-full ${classNames} outline-none`} contenteditable="true" on:focus={onFocus} on:input={onInput} on:keydown={onKeyDown} {placeholder}>
  {content}
</div>