import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {
  MonthService,
  DayService,
  WeekService,
  WorkWeekService,
  EventSettingsModel,
  ResizeService,
  DragAndDropService,
  AgendaService,
  GroupModel
} from '@syncfusion/ej2-angular-schedule';

import { Internationalization } from '@syncfusion/ej2-base';
import { resourceConferenceData } from './DataSource';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
declare var require: any;
loadCldr(
  require('cldr-data/supplemental/numberingSystems.json'),
  require('cldr-data/main/de/ca-gregorian.json'),
  require('cldr-data/main/de/numbers.json'),
  require('cldr-data/main/de/timeZoneNames.json'),
  require('cldr-data/supplemental/weekdata.json')
  ); 
  
L10n.load({
'fr-CA': {
    'schedule': {
        'day': 'journée',
        'week': 'La semaine',
        'workWeek': 'Semaine de travail',
        'month': 'Mois',
        'today': 'Aujourd`hui',
          
        "year": "Year",
        "agenda": "Agenda",
        "weekAgenda": "Week Agenda",
        "workWeekAgenda": "Work Week Agenda",
        "monthAgenda": "Month Agenda",
        "noEvents": "No events",
        "emptyContainer": "There are no events scheduled on this day.",
        "allDay": "All day",
        "start": "Start",
        "end": "End",
        "more": "more",
        "close": "Close",
        "cancel": "Cancel",
        "noTitle": "(No Title)",
        "delete": "Delete",
        "deleteEvent": "This Event",
        "deleteMultipleEvent": "Delete Multiple Events",
        "selectedItems": "Items selected",
        "deleteSeries": "Entire Series",
        "edit": "Edit",
        "editSeries": "Entire Series",
        "editEvent": "This Event",
        "createEvent": "Create",
        "subject": "Subject",
        "addTitle": "Add title",
        "moreDetails": "More Details",
        "save": "Save",
        "editContent": "How would you like to change the appointment in the series?",
        "deleteContent": "Are you sure you want to delete this event?",
        "deleteMultipleContent": "Are you sure you want to delete the selected events?",
        "newEvent": "New Event",
        "title": "Title",
        "location": "Location",
        "description": "Description",
        "timezone": "Timezone",
        "startTimezone": "Start Timezone",
        "endTimezone": "End Timezone",
        "repeat": "Repeat",
        "saveButton": "Save",
        "cancelButton": "Cancel",
        "deleteButton": "Delete",
        "recurrence": "Recurrence",
        "wrongPattern": "The recurrence pattern is not valid.",
        "seriesChangeAlert": "Do you want to cancel the changes made to specific instances of this series and match it to the whole series again?",
        "createError": "The duration of the event must be shorter than how frequently it occurs. Shorten the duration, or change the recurrence pattern in the recurrence event editor.",
        "sameDayAlert": "Two occurrences of the same event cannot occur on the same day.",
        "editRecurrence": "Edit Recurrence",
        "repeats": "Repeats",
        "alert": "Alert",
        "startEndError": "The selected end date occurs before the start date.",
        "invalidDateError": "The entered date value is invalid.",
        "blockAlert": "Events cannot be scheduled within the blocked time range.",
        "ok": "Ok",
        "yes": "Yes",
        "no": "No",
        "occurrence": "Occurrence",
        "series": "Series",
        "previous": "Previous",
        "next": "Next",
        "timelineDay": "Timeline Day",
        "timelineWeek": "Timeline Week",
        "timelineWorkWeek": "Timeline Work Week",
        "timelineMonth": "Timeline Month",
        "timelineYear": "Timeline Year",
        "editFollowingEvent": "Following Events",
        "deleteTitle": "Delete Event",
        "editTitle": "Edit Event",
        "beginFrom": "Begin From",
        "endAt": "End At",
        "expandAllDaySection": "Expand-all-day-section",
        "collapseAllDaySection": "Collapse-all-day-section"
    },
    "recurrenceeditor": {
        "none": "None",
        "daily": "Daily",
        "weekly": "Weekly",
        "monthly": "Monthly",
        "month": "Month",
        "yearly": "Yearly",
        "never": "Never",
        "until": "Until",
        "count": "Count",
        "first": "First",
        "second": "Second",
        "third": "Third",
        "fourth": "Fourth",
        "last": "Last",
        "repeat": "Repeat",
        "repeatEvery": "Repeat every",
        "on": "Repeat On",
        "end": "End",
        "onDay": "Day",
        "days": "Day(s)",
        "weeks": "Week(s)",
        "months": "Month(s)",
        "years": "Year(s)",
        "every": "every",
        "summaryTimes": "time(s)",
        "summaryOn": "on",
        "summaryUntil": "until",
        "summaryRepeat": "Repeats",
        "summaryDay": "day(s)",
        "summaryWeek": "week(s)",
        "summaryMonth": "month(s)",
        "summaryYear": "year(s)",
        "monthWeek": "Month Week",
        "monthPosition": "Month Position",
        "monthExpander": "Month Expander",
        "yearExpander": "Year Expander",
        "repeatInterval": "Repeat Interval"
    },
    'calendar': {
        'today': 'Aujourd`hui'
    }
}
});


@Component({
  selector: 'app-reservation',
  providers: [AgendaService],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public selectedDate: Date = new Date(2021, 10, 1);
  public views: Array<string> = ['Day', 'Week', 'Month', 'Agenda'];
  public eventSettings: EventSettingsModel = {
      dataSource: resourceConferenceData
  };  
  public group: GroupModel = {
      byGroupID: false,
      resources: ['Projects', 'Categories']
  };
  public projectDataSource: Object[] = [
      { text: 'Salle 1', id: 1, color: '#00A170' },
      { text: 'Salle 2', id: 2, color: '#0072B5' },
      { text: 'Salle 3', id: 3, color: '#D2386C' },
      { text: 'Salle 4', id: 4, color: '#D2386C' },
      { text: 'Salle 5', id: 5, color: '#0072B5' }
      ,
      { text: 'Salle 6', id: 6, color: '#00A170' }
      ,
      { text: 'Salle 7', id: 7, color: '#0072B5' }   ,
      { text: 'Salle 8', id: 8, color: '#0072B5' }   ,
      { text: 'Salle 9', id: 9, color: '#0072B5' }   ,
      { text: 'Salle 10', id: 10, color: '#0072B5' }   ,
      { text: 'Salle 11', id: 11, color: '#0072B5' }   ,
      { text: 'Salle 12', id: 12, color: '#0072B5' }
  ];
  public allowMultipleCategory: Boolean = false;
  public categoryDataSource: Object[] = [
      { text: '', id: 1, color: '#df5286' }
    
  ];
}
