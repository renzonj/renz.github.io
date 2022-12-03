<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style/main-style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link href='assets/javascript/dynamic_calendar/main.css' rel='stylesheet' />
    <link href='assets/bootstrap/bootstrap_grid.css' rel='stylesheet' />
    <script src='assets/javascript/dynamic_calendar/main.js'></script>

    <title>Main</title>

</head>
<body>


<!-- Permanent -->
<!-- Navbar -->
<nav class="sidebar">
    <header>
        <div class="logo">
            <img src="assets/img/logo/ganap - 002.png" alt="" width="75px" height="75px">
        </div>
    </header>

<!-- Apps -->
    <div class="sideapps">
        <div class="app" id="addevent">
            <img src="assets/img/icons/add_circle.png" alt="" width="40px" height="40px">
            <p>Add Event</p>
        </div>
        <div class="app" id="today">
            <img src="assets/img/icons/today.png" alt="" width="40px" height="40px">
            <p>Today</p>
        </div>
        <div class="app">
            <img src="assets/img/icons/event.png" alt="" width="40px" height="40px">
            <p>Events</p>
        </div>
        <div class="app">
            <img src="assets/img/icons/class.png" alt="" width="40px" height="40px">
            <p>Class</p>
        </div>
        <div class="app">
            <img src="assets/img/icons/peers.png" alt="" width="40px" height="40px">
            <p>Peers</p>
        </div>
    </div>
</nav>

<!-- Top Bar with Search field -->
<nav class="topbar">
    <div class="topbar-content">
        <div class="topbar-right">
                <form action=""class="search-container">
                <input type="text" placeholder="Search.." name="search" id="search">
                    <button type="submit">
                        <img src="assets/img/icons/search_FILL0_wght400_GRAD0_opsz48.svg" alt="" width="25px" height="25px">
                    </button>
                </form>
            <div class="topbar-item">
                <img src="assets/img/icons/notifications_FILL0_wght400_GRAD0_opsz48.svg" alt="" width="25px" height="25px">
            </div>
            <div class="topbar-item">
                <img src="assets/img/icons/manage_accounts_FILL0_wght400_GRAD0_opsz48.svg" alt="" width="25px" height="25px">
            </div>
        </div>
    </div>
</nav>
<!-- End of Permanent -->



<!-- Bootstrap Container -->
<div class="main-container">
<div class="container">
<!-- Main_1 -->
<div class="main-content">

    <div class="main-content-header">
        <h2>Good morning, Renzon Joyner</h2>
       
                <h3>Today</h3>
                <div class='weather' id='weather'></div>
                <h1>Wednesday, November 23</h1>
                <h3> Dasmarinas &nbsp;&nbsp;|&nbsp;&nbsp; 29℃ &nbsp;&nbsp;|&nbsp;&nbsp;  Clear Sky</h3>
        <hr>
<!-- UPCOMING EVENTS -->
            <div class="main-content-event-scroll">
                <h3>Upcoming events</h3>
                <button id="scroll-card-right" type="button"><img src="assets/img/icons/arrow_right_FILL0_wght400_GRAD0_opsz48.svg" width="30px"></button>
            </div>
    </div> 


<!-- EVENTS CARD -->
    <div class="main-content-body" id="main-h-c">


        <div class="main-event-card">
            <div class="main-event-card-header">
                <div class="event-cover">
                    <img src="assets/img/event_cover/jess-bailey-q10VITrVYUM-unsplash.jpg" alt="" width="250" height="180">
                </div>
            </div>
            <div class="main-event-card-text">
                <div class="main-event-card-title">
                    <p>Online | MSTeams</p>
                </div>
                <div class="main-event-card-body">
                    <h3>Introduction to Programming</h3>
                    <p>Dec. 1 | 9:00 AM - 12:00 AM</p>
                </div>
            </div>
        </div>

        <!-- Event Card 1-->
        <div class="main-event-card">
            <div class="main-event-card-header">
                <div class="event-cover">
                    <img src="assets/img/event_cover/aleksander-vlad-jiVeo0i1EB4-unsplash.jpg" alt="" width="250" height="180">
                </div>
            </div>
            <div class="main-event-card-text">
                <div class="main-event-card-title">
                    <p>Online | MSTeams</p>
                </div>
                <div class="main-event-card-body">
                    <h3>JavaScript Basics</h3>
                    <p>Dec. 2 | 9:00 AM - 12:00 AM</p>
                </div>
            </div>
        </div>

        <!-- Event Card 2-->
        <div class="main-event-card">
            <div class="main-event-card-header">
                <div class="event-cover">
                    <img src="assets/img/event_cover/windows-Bnl5yt3SNsM-unsplash.jpg" alt="" width="250" height="180">
                </div>
            </div>
            <div class="main-event-card-text">
                <div class="main-event-card-title">
                    <p>Online | MSTeams</p>
                </div>
                <div class="main-event-card-body">
                    <h3>Programming 101</h3>
                    <p>Dec. 3 | 9:00 AM - 12:00 AM</p>
                </div>
            </div>
        </div>

        <!-- Event Card 3-->
        <div class="main-event-card">
            <div class="main-event-card-header">
                <div class="event-cover">
                    <img src="assets/img/event_cover/andras-vas-Bd7gNnWJBkU-unsplash.jpg" alt="" width="250" height="180">
                </div>
            </div>
            <div class="main-event-card-text">
                <div class="main-event-card-title">
                    <p>Online | MSTeams</p>
                </div>
                <div class="main-event-card-body">
                    <h3>Programming 101</h3>
                    <p>Dec. 3 | 9:00 AM - 12:00 AM</p>
                </div>
            </div>
        </div>

        <!-- Event Card 3-->
        <div class="main-event-card">
            <div class="main-event-card-header">
                <div class="event-cover">
                    <img src="assets/img/event_cover/sincerely-media-HoEYgBL_Gcs-unsplash.jpg" alt="" width="250" height="180">
                </div>
            </div>
            <div class="main-event-card-text">
                <div class="main-event-card-title">
                    <p>Online | MSTeams</p>
                </div>
                <div class="main-event-card-body">
                    <h3>Programming 101</h3>
                    <p>Dec. 3 | 9:00 AM - 12:00 AM</p>
                </div>
            </div>
        </div>

        <!-- Event Card 3-->
        <div class="main-event-card">
            <div class="main-event-card-header">
                <div class="event-cover">
                    <img src="assets/img/event_cover/florian-olivo-4hbJ-eymZ1o-unsplash.jpg" alt="" width="250" height="180">
                </div>
            </div>
            <div class="main-event-card-text">
                <div class="main-event-card-title">
                    <p>Online | MSTeams</p>
                </div>
                <div class="main-event-card-body">
                    <h2>Programming 101</h2>
                    <p>Dec. 3 | 9:00 AM - 12:00 AM</p>
                </div>
            </div>
        </div>

    </div>
</div><!-- End of Main -->

<!-- Main_2 -->
<div class="row py-4">
    <div class="col-md-9 py-3">
        <div class="calendar-frame">  
            <div id='calendar'></div>
        </div>
    </div>
    
    <div class="col-md-3 pl-sm-5">
        <div class="row pt-3 px-3">
            <div class="calendar-event-card">
                <div class="card-header">
                    <h3>Upcoming Events</h3>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <p>Event 1</p>
                        <p>Event 2</p>
                        <p>Event 3</p>
                        <p>Event 4</p>
                        <p>Event 5</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4 px-3">
            <div class="calendar-event-card">
                <div class="card-header">
                    <h3>Upcoming Events</h3>
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <p>Event 1</p>
                        <p>Event 2</p>
                        <p>Event 3</p>
                        <p>Event 4</p>
                        <p>Event 5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</div><!-- End of Container -->
</div><!-- End of Main Container -->








<!-- CALENDAR SCRIPT -->
<script>
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
</script>

<!-- SCROLL BTN SCRIPT -->
<script>
    const buttonRight = document.getElementById('scroll-card-right');
    const buttonLeft = document.getElementById('scroll-card-left');

    buttonRight.onclick = function () {
      document.getElementById('main-h-c').scrollLeft += 100;
    };
    buttonLeft.onclick = function () {
      document.getElementById('main-h-c').scrollLeft -= 100;
    };
</script>
    
</body>
</html>