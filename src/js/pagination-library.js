import * as paginationjs from 'paginationjs';

let previousPagesShow = false;

if (screen.width > 767) {
  previousPagesShow = true;
}

const watchedBtn = document.querySelector('button[data-action="watched"]');
const queueBtn = document.querySelector('button[data-action="queue"]');

watchedBtn.addEventListener('click', makePagination);
queueBtn.addEventListener('click', makePagination);

function makePagination(event) {
  document.querySelector('#pagination-container').innerHTML = '';
  const action = event.target.dataset.action;
  const check = JSON.parse(localStorage.getItem(action.charAt(0).toUpperCase() + action.slice(1)));
  if (check && check.length > 0) {
    $('#pagination-container').pagination({
      dataSource: check,
      pageSize: 20,
      prevText: '',
      nextText: '',
      ellipsisText: '&#8943',
      showFirstOnEllipsisShow: previousPagesShow,
      showLastOnEllipsisShow: previousPagesShow,
      callback: function (data, pagination) {
        // template method of yourself

        var html = data;
        $('#data-container').html(html);
      },
    });
  }
}
