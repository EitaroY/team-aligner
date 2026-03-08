# TeamAligner UI Guide

## Priority Workbench Interface

### 1. Data Input Panel

**Connect GitHub Repository**
- Click "Connect" button to link your GitHub account
- Imports: issues, PRs, changelog, velocity metrics
- Status indicator shows connection state

**Connect User Monitoring**
- Click "Connect" button to link analytics tools
- Imports: analytics data, support logs, session events
- Status indicator confirms successful connection

**Load Snapshot**
- Click "Load latest snapshot" button
- Refreshes all recommendations and priority rankings
- Updates timestamp showing last refresh time

### 2. Product Snapshot Panel

**Metrics Grid**
- Displays key metrics in card format
- Shows current values and trend indicators
- Auto-updates when snapshot is loaded

**Feature Utilization Table**
- Lists all features with usage percentages
- Shows month-over-month change column
- Displays customer expectation levels
- Sortable by clicking column headers

### 3. Priority Engine Panel

**Now Column (0-2 months)**
- Lists immediate priority items
- Shows calculated priority scores
- Color-coded by urgency level

**Future Column (3-6 months)**
- Lists strategic initiatives
- Shows future-weighted scores
- Helps with long-term planning

### 4. Next Feature Tickets Panel

**Ticket Cards**
- Draggable cards showing feature tickets
- Up/down arrow buttons for manual reordering
- Score badges display priority values

**Sorting Controls**
- "Reset to Now score order" - sorts by immediate priority
- "Sort by Future score" - sorts by strategic value
- Changes apply instantly to ticket list

### 5. Roadmap Report Output Panel

**Audience Selector**
- Dropdown menu with three options:
  - Executive: High-level view
  - Engineering: Technical focus
  - Business: Customer impact focus

**Custom Prompt Field**
- Optional text area for specific instructions
- Placeholder text shows example usage
- Influences report generation

**Output Button**
- Generates report based on current settings
- Report appears in preview area below
- Copy button for easy sharing

## Interactive Elements

### Buttons
- **Primary buttons** (blue): Main actions like "Load snapshot", "Output"
- **Secondary buttons** (gray): Supporting actions like "Connect", "Sort"
- **Arrow controls**: Manual ordering in ticket list

### Status Indicators
- **Green**: Connected/Active
- **Yellow**: Pending/Processing
- **Red**: Disconnected/Error
- **Gray**: Not configured

### Data Display
- **Tables**: Sortable columns, hover highlights
- **Cards**: Clickable for details, draggable in ticket list
- **Metrics**: Live values with trend arrows
- **Scores**: Numeric badges with color coding

## Navigation Flow

1. **Start** → Data Input Panel
2. **Connect sources** → Load snapshot
3. **Review metrics** → Product Snapshot
4. **Check priorities** → Priority Engine
5. **Adjust order** → Feature Tickets
6. **Generate output** → Report Panel

## Visual Feedback

- **Loading states**: Spinner icons during data fetch
- **Success messages**: Green toast notifications
- **Error messages**: Red alert boxes with details
- **Hover effects**: Highlight on interactive elements
- **Drag indicators**: Visual guides when reordering

## Keyboard Shortcuts

- `Space`: Load latest snapshot
- `↑/↓`: Navigate ticket list
- `Enter`: Open selected item details
- `Cmd/Ctrl + C`: Copy report output
- `Esc`: Cancel current operation