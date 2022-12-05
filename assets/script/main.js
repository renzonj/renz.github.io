

//  DATE TODAY
    document.getElementById('today').innerHTML = new Date().toDateString();



// DYNAMIC CALENDAR
    document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialDate: '2022-12-01',
      editable: true,
      selectable: true,
      businessHours: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'All Day Event',
          start: '2022-12-01'
        },
        {
          title: 'Long Event',
          start: '2022-12-07',
          end: '2022-12-10'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-12-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-12-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2022-12-11',
          end: '2022-12-13'
        },
        {
          title: 'Meeting',
          start: '2022-12-12T10:30:00',
          end: '2022-12-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2022-12-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2022-12-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2022-12-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2022-12-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2022-12-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-12-28'
        }
      ]
    });

    calendar.render();
  });




// BUTTON SCROLL
    const buttonRight = document.getElementById('scroll-card-right');
    const buttonLeft = document.getElementById('scroll-card-left');

    buttonRight.onclick = function () {
      document.getElementById('main-h-c').scrollLeft += 100;
    };
    buttonLeft.onclick = function () {
      document.getElementById('main-h-c').scrollLeft -= 100;
    };




// TOUCH SCROLL
    const slider = document.querySelector('.main-content-body');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX); //scroll-speed 
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
    
    
