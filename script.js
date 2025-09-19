        // CalendarApp module to encapsulate functionality
        const CalendarApp = (() => {
            // DOM elements
            const elements = {
                progressBar: null,
                youAreHere: null,
                hereLabel: null,
                monthList: null,
                progressText: null,
                currentDate: null
            };
            
            // State
            let currentDate = new Date();
            
            // Initialize the application
            function init() {
                cacheDOM();
                setupEventListeners();
                render();
            }
            
            // Cache DOM elements for performance
            function cacheDOM() {
                elements.progressBar = document.getElementById('progressBar');
                elements.youAreHere = document.getElementById('youAreHere');
                elements.hereLabel = document.getElementById('hereLabel');
                elements.monthList = document.getElementById('monthList');
                elements.progressText = document.getElementById('progressText');
                elements.currentDate = document.getElementById('currentDate');
            }
            
            // Set up event listeners
            function setupEventListeners() {
                window.addEventListener('resize', debounce(render, 250));
            }
            
            // Calculate progress through the year (0 to 1)
            function calculateYearProgress() {
                const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
                const endOfYear = new Date(currentDate.getFullYear() + 1, 0, 1);
                const totalMsInYear = endOfYear - startOfYear;
                const elapsedMs = currentDate - startOfYear;
                
                return elapsedMs / totalMsInYear;
            }
            
            // Format progress as percentage
            function formatProgress(progress) {
                return (progress * 100).toFixed(2);
            }
            
            // Update the progress bar
            function updateProgressBar(progress) {
                elements.progressBar.style.width = `${progress * 100}%`;
            }
            
            // Position the "You Are Here" indicator
            function positionYouAreHere(progress) {
                const progressContainer = elements.progressBar.parentElement;
                const containerRect = elements.youAreHere.parentElement.getBoundingClientRect();
                const progressRect = progressContainer.getBoundingClientRect();

                // Position relative to the progress container
                const relativeLeft = progressRect.left - containerRect.left + (progress * progressRect.width);

                elements.youAreHere.style.left = `${relativeLeft}px`;
            }
            
            // Update the month list with current day indicator
            function updateMonthList() {
                const currentMonth = currentDate.getMonth();
                const currentDay = currentDate.getDate();
                
                // Clear previous current day indicators
                document.querySelectorAll('.current-day').forEach(el => el.remove());
                document.querySelectorAll('.current').forEach(el => el.classList.remove('current'));
                
                // Add current day indicator to current month
                if (elements.monthList.children[currentMonth]) {
                    elements.monthList.children[currentMonth].classList.add('current');
                    
                    const dayIndicator = document.createElement('span');
                    dayIndicator.className = 'current-day';
                    dayIndicator.textContent = currentDay;
                    elements.monthList.children[currentMonth].appendChild(dayIndicator);
                }
            }
            
            // Update progress text
            function updateProgressText(progress) {
                elements.progressText.textContent = `Year Progress: ${formatProgress(progress)}%`;
                elements.hereLabel.textContent = `DAY ${currentDate.getDate()}`;
                
                // Format and display current date
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                elements.currentDate.textContent = currentDate.toLocaleDateString('en-US', options);
            }
            
            // Debounce function for performance
            function debounce(func, wait) {
                let timeout;
                return function executedFunction(...args) {
                    const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                    };
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                };
            }
            
            // Main render function
            function render() {
                const progress = calculateYearProgress();
                
                updateProgressBar(progress);
                positionYouAreHere(progress);
                updateMonthList();
                updateProgressText(progress);
            }
            
            // Public API
            return {
                init,
                render
            };
        })();

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', CalendarApp.init);
