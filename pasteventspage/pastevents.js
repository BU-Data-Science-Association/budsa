/**
 * Past Events Page JavaScript
 * Simple filtering functionality for manually pasted event cards
 */

/* ================================ */
/* CONSTANTS & CONFIGURATION        */
/* ================================ */

const PAST_EVENTS_SELECTORS = {
    filterButtons: '.filter-btn',
    eventCards: '.event-card',
    eventsGrid: '.events-grid',
    noEventsMessage: '.no-events-message'
};

/* ================================ */
/* INITIALIZATION                   */
/* ================================ */

document.addEventListener('DOMContentLoaded', function() {
    /* Initialize filtering for manually pasted events */
    initPastEventsFiltering();
    checkForEvents();
});

/* ================================ */
/* PAST EVENTS FILTERING            */
/* ================================ */

function initPastEventsFiltering() {
    const filterButtons = document.querySelectorAll(PAST_EVENTS_SELECTORS.filterButtons);

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            /* Update active button state */
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            /* Filter past event cards */
            filterPastEvents(filterValue);
        });
    });
}

function filterPastEvents(filterValue) {
    const eventCards = document.querySelectorAll(PAST_EVENTS_SELECTORS.eventCards);
    const eventsGrid = document.querySelector(PAST_EVENTS_SELECTORS.eventsGrid);
    
    /* First, show/hide cards based on filter */
    const visibleCards = [];
    eventCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            showPastEventCard(card);
            visibleCards.push(card);
        } else {
            hidePastEventCard(card);
        }
    });
    
    /* Sort visible cards by date (most recent first for past events) */
    visibleCards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        
        /* Sort by date (most recent first) */
        return dateB - dateA;
    });
    
    /* Re-append sorted visible cards to maintain order */
    visibleCards.forEach(card => {
        eventsGrid.appendChild(card);
    });
    
    /* Check if we should show/hide the no events message */
    checkForEvents();
}

function showPastEventCard(card) {
    card.style.display = 'block';
    /* Re-trigger animation for filtered cards */
    card.style.animation = 'none';
    card.offsetHeight; // Force reflow
    card.style.animation = 'fadeInUp 0.6s ease forwards';
}

function hidePastEventCard(card) {
    card.style.display = 'none';
}

/* ================================ */
/* UTILITY FUNCTIONS                */
/* ================================ */

function checkForEvents() {
    const eventCards = document.querySelectorAll(PAST_EVENTS_SELECTORS.eventCards);
    const noEventsMessage = document.querySelector(PAST_EVENTS_SELECTORS.noEventsMessage);
    
    /* Count visible event cards (exclude the no-events-message) */
    const visibleEvents = Array.from(eventCards).filter(card => 
        !card.classList.contains('no-events-message') && 
        card.style.display !== 'none'
    );
    
    if (visibleEvents.length === 0) {
        noEventsMessage.style.display = 'block';
    } else {
        noEventsMessage.style.display = 'none';
    }
}