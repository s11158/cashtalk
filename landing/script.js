const demos = [
  { transcript: '«Такси 45 дирхам»', category: '🚕 Транспорт', amount: '45 AED' },
  { transcript: '«Вчера продукты 230 дирхам»', category: '🛒 Продукты', amount: '230 AED' },
  { transcript: '«Получил 500 долларов»', category: '💰 Доход', amount: '+500 USD' },
  { transcript: '«Такси 45, KFC 25, продукты 98, парковка 12»', category: '✓ 4 записи', amount: '180 AED' }
];

const transcript = document.querySelector('#transcript');
const category = document.querySelector('#demoCategory');
const amount = document.querySelector('#demoAmount');
const botMessage = document.querySelector('#botMessage');
const waveform = document.querySelector('#waveform');
const voiceButton = document.querySelector('#voiceButton');
const chips = [...document.querySelectorAll('.phrase-chip')];

function showDemo(index, animate = true) {
  const demo = demos[index];
  chips.forEach((chip, chipIndex) => chip.classList.toggle('active', chipIndex === index));
  if (animate) {
    waveform.classList.add('playing');
    voiceButton.textContent = '■';
    botMessage.classList.add('updating');
  }

  window.setTimeout(() => {
    transcript.textContent = demo.transcript;
    category.textContent = demo.category;
    amount.textContent = demo.amount;
    botMessage.classList.remove('updating');
  }, animate ? 360 : 0);

  window.setTimeout(() => {
    waveform.classList.remove('playing');
    voiceButton.textContent = '▶';
  }, animate ? 1250 : 0);
}

chips.forEach((chip, index) => chip.addEventListener('click', () => showDemo(index)));
voiceButton.addEventListener('click', () => {
  const activeIndex = chips.findIndex(chip => chip.classList.contains('active'));
  showDemo((activeIndex + 1) % demos.length);
});

document.querySelector('#year').textContent = new Date().getFullYear();
showDemo(0, false);
