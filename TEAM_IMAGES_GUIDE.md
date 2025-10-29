# Team Member Images - Setup Instructions

## Quick Start

The team section in the About component is configured to display 2 team members with their photos.

### Option 1: Add Your Own Photos

1. **Prepare Images:**
   - Format: JPG or PNG
   - Recommended size: 400x400 pixels (square)
   - Keep file size under 500KB for optimal loading

2. **Upload to Project:**
   Place your images in the following location:
   ```
   public/
   └── assets/
       └── image/
           ├── team-member-1.jpg  (Founder & CEO)
           └── team-member-2.jpg  (Chief Operating Officer)
   ```

3. **Update Team Member Info:**
   Edit `src/components/About.tsx` and find the `teamMembers` array:
   ```tsx
   const teamMembers = [
     {
       name: "Your Name Here",
       designation: "Founder & CEO",
       image: "/assets/image/team-member-1.jpg",
       description: "Your description here"
     },
     {
       name: "Second Person Name",
       designation: "Chief Operating Officer",
       image: "/assets/image/team-member-2.jpg",
       description: "Your description here"
     }
   ];
   ```

### Option 2: Use Placeholder (Current Setup)

The component is already configured with a fallback system that generates avatar initials if images don't exist.

**Current behavior:**
- If image exists → displays the actual photo
- If image missing → shows generated avatar with person's initials

**Placeholder URLs used:**
```
https://ui-avatars.com/api/?name=Rajesh+Kumar&size=128&background=facc15&color=000
https://ui-avatars.com/api/?name=Priya+Sharma&size=128&background=facc15&color=000
```

### Adding More Team Members

To add more people to the team section:

1. Open `src/components/About.tsx`
2. Find the `teamMembers` array
3. Add more objects:

```tsx
const teamMembers = [
  {
    name: "Rajesh Kumar",
    designation: "Founder & CEO",
    image: "/assets/image/team-member-1.jpg",
    description: "Leading innovation in casting technology since 1985"
  },
  {
    name: "Priya Sharma",
    designation: "Chief Operating Officer",
    image: "/assets/image/team-member-2.jpg",
    description: "Ensuring excellence in operations and quality"
  },
  // Add new members here
  {
    name: "New Member Name",
    designation: "Their Title",
    image: "/assets/image/team-member-3.jpg",
    description: "Brief description"
  }
];
```

### Styling Notes

- Cards have yellow borders matching the theme
- Hover effects: scale and shadow
- Images are circular with yellow border
- Fully responsive grid (1 column mobile, 2 columns tablet+)

### Tips for Best Results

1. **Image Quality:**
   - Use high-resolution photos
   - Ensure good lighting
   - Professional headshots work best

2. **Consistency:**
   - Keep all photos same style (e.g., all professional, all casual)
   - Use similar backgrounds
   - Crop to same aspect ratio

3. **Optimization:**
   - Use online tools like TinyPNG to compress images
   - Convert to WebP for better performance (Next.js handles this automatically)

## That's it!

Your team section will automatically update when you add the images. The fallback ensures the site always looks good even before photos are added.
