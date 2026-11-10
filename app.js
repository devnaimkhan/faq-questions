let parentFaq = document.querySelectorAll('.faq_card');

parentFaq.forEach(faq => {
  faq.addEventListener('click', () => {
    let body = faq.querySelector('.body');

    if (faq.classList.contains('active')) {
      faq.classList.remove('active');
      body.style.maxHeight = null;
    } else {
      parentFaq.forEach(otherFaq => {
        otherFaq.classList.remove('active');
        otherFaq.querySelector('.body').style.maxHeight = null;
      });
      faq.classList.add('active');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});
