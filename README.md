# Year Progress Calendar

A simple  web application that visualizes your progress through the current year. Track how much of the year has passed with an interactive timeline and "You Are Here" indicator.

## Features

- **Real-time Progress Tracking**: Displays the exact percentage of the year that has elapsed
- **Interactive Timeline**: Visual progress bar that fills up as the year progresses
- **Current Position Indicator**: "YOU ARE HERE" arrow that points to your current position in the year
- **Month Highlights**: Current month is highlighted and shows the current day
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Uses a handwritten font style with a purple color scheme for a fun, engaging look

## Demo

The app automatically calculates and displays:
- Year progress percentage (e.g., "Year Progress: 45.67%")
- Current date in a readable format
- Visual progress bar
- Positioned indicator showing exactly where you are in the year

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: Custom properties (CSS variables), flexbox, responsive design
- **Vanilla JavaScript**: Modular ES6+ code with no external dependencies
- **Google Fonts**: Permanent Marker font for the handwritten aesthetic

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/year-progress-calendar.git
   ```

2. Navigate to the project directory:
   ```bash
   cd year-progress-calendar
   ```

3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## Usage

Simply open the `index.html` file in any modern web browser. The app will automatically:
- Calculate your current position in the year
- Display the progress percentage
- Show the current date
- Highlight the current month and day

The app updates in real-time and responds to window resizing for optimal viewing on different screen sizes.

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript features
- CSS Custom Properties (CSS Variables)
- Flexbox

## Project Structure

```
year-progress-calendar/
├── index.html      # Main HTML file
├── style.css       # Styling and responsive design
├── script.js       # Application logic
└── README.md       # This file
```

## Customization

The app uses CSS custom properties for easy theming. You can modify colors by changing the values in `:root` in `style.css`:

```css
:root {
    --primary-color: #7B2CBF;    /* Purple accent color */
    --background-color: #f9f9f9; /* Light background */
    --timeline-bg: #e0e0e0;      /* Timeline background */
    --text-color: #333;          /* Text color */
    --border-color: #ccc;        /* Border color */
}
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---


