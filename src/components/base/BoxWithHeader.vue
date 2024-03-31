<template>
  <div class="rounded-xl flex flex-col border-separator xl:border-2">
    <div class="shrink-0 p-4 xl:p-6 border-b border-separator xl:border-none xl:bg-separator">
      <slot name="header"></slot>
    </div>
    <div class="grow shrink min-h-0 p-4 xl:p-6">
      <slot></slot>
    </div>
  </div>
</template>
