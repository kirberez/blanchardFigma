// Tooltip
tippy('.projects-descr__tooltip.fst', {
  content: 'Пример современных тенденций - современная методология разработки',
  theme: 'violet',
  inertia: true,
})

tippy('.projects-descr__tooltip.snd', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  theme: 'violet',
  inertia: true,
})

let exam = tippy('.projects-descr__tooltip.thd', {
  content: 'В стремлении повысить качество',
  theme: 'violet',
  inertia: true,
});

console.log(exam)
exam.show(900);