# TODO: Add Floating Animated Icon to Landing Page

## Plan

### Information Gathered:
- **Project Type**: React + Vite portfolio website for a graphic designer
- **Current Structure**: 
  - App.jsx controls active tab (resume/portfolio)
  - FolderLayout.jsx is the main layout with header, navigation, and content
  - ResumeSection.jsx is the landing page showing name, role, hero image, manifesto, experience, and skills
- **Tech Stack**: React, Framer Motion (already imported in components)
- **Theme**: Zine/creative portfolio style with minimalist design

### Plan:
1. **Add floating animated icon to ResumeSection.jsx (Landing Page)** - IN PROGRESS
   - Add a creative/graphic design related icon (pencil, brush, or design element)
   - Use framer-motion for smooth floating animation (since it's already used in the project)
   - Position the icon strategically in the hero section or as a decorative element

2. **Add CSS styling for the floating icon** - PENDING
   - Position the icon appropriately
   - Add animation styles

### Files to Edit:
- `src/components/ResumeSection.jsx` - Add the floating animated icon component
- `src/components/ResumeSection.css` - Add styling for the floating icon

### Implementation Steps:
1. Import motion from framer-motion in ResumeSection.jsx (already imported)
2. Create a FloatingIcon component with framer-motion animation
3. Add the icon to the ResumeSection render
4. Add CSS for positioning and styling
