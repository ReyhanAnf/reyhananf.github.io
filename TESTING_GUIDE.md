# Testing Guide - Floating Navigation & Contact Section

## Quick Start

```bash
cd /home/reyhananf/Data/Projects/Personal/reyhananf.github.io
npm run dev
# Open http://localhost:3000 in your browser
```

---

## Visual Testing Checklist

### Desktop View (1024px+)

#### 1. **Floating Navigation Visibility**
- [ ] Nav bar appears in **top-right corner**
- [ ] Nav has semi-transparent background with blur effect
- [ ] 6 icons visible: Home, About, Skills, Experience, Projects, Contact
- [ ] Nav disappears when scrolling down past 300px
- [ ] Nav reappears when scrolling back up

#### 2. **Active Section Indicator**
- [ ] **Home section** - Home icon highlighted in primary color
- [ ] Scroll to **About** - About icon becomes highlighted
- [ ] Scroll to **Skills** - Skills icon becomes highlighted
- [ ] Scroll to **Experience** - Experience icon becomes highlighted
- [ ] Scroll to **Projects** - Projects icon becomes highlighted
- [ ] Scroll to **Contact** - Contact icon becomes highlighted
- [ ] Indicator updates smoothly as you scroll

#### 3. **Hover Effects**
- [ ] Hover over any nav icon - tooltip appears with section name
- [ ] Tooltip appears to the **left** of the icon
- [ ] Icon scales up slightly on hover
- [ ] Smooth animation when tooltip appears/disappears

#### 4. **Click Navigation**
- [ ] Click **Home** icon → Page scrolls to header
- [ ] Click **About** icon → Page scrolls to about section
- [ ] Click **Skills** icon → Page scrolls to skills section
- [ ] Click **Experience** icon → Page scrolls to experience section
- [ ] Click **Projects** icon → Page scrolls to projects section
- [ ] Click **Contact** icon → Page scrolls to contact section
- [ ] All clicks use smooth scroll behavior

#### 5. **Contact Section**
- [ ] Contact section is **visible** on the page
- [ ] Heading reads "Let's Connect"
- [ ] Subtitle explains to reach out via email
- [ ] **"📧 Send Email"** button is clickable
- [ ] Button has proper styling and hover effects
- [ ] Email address is displayed below button
- [ ] Button is clickable and opens email client with:
  - Subject: "Let's Collaborate!"
  - Pre-filled message body

---

### Mobile View (< 768px)

#### 1. **Responsive Behavior**
- [ ] Floating nav is **completely hidden** on mobile
- [ ] Layout adapts properly without nav
- [ ] All sections remain accessible via scroll
- [ ] Contact section still visible and functional

#### 2. **Contact Functionality on Mobile**
- [ ] Email button works and opens mail app
- [ ] All text is readable
- [ ] No layout overflow or scrolling issues

---

## Browser Console Checks

Open **DevTools** (F12 → Console tab) and verify:

```
✅ No red error messages
✅ No warning messages about missing IDs
✅ No React warnings about hooks or rendering
✅ Network requests load successfully
```

---

## Detailed Test Scenarios

### Scenario 1: Scroll Behavior Test

1. **Scroll Down (Slow)**
   - Expected: Nav stays visible
   - [ ] PASS / [ ] FAIL

2. **Scroll Down (Fast) past 300px**
   - Expected: Nav disappears
   - [ ] PASS / [ ] FAIL

3. **Scroll Back Up**
   - Expected: Nav reappears
   - [ ] PASS / [ ] FAIL

4. **Scroll to Top**
   - Expected: Nav always visible at top
   - [ ] PASS / [ ] FAIL

---

### Scenario 2: Section Navigation Test

1. **Start at top** → Active section should be "Home"
2. **Scroll to About** → Active section should change to "About"
3. **Scroll to Skills** → Active section should change to "Skills"
4. **Scroll to Experience** → Active section should change to "Experience"
5. **Scroll to Projects** → Active section should change to "Projects"
6. **Scroll to Contact** → Active section should change to "Contact"

---

### Scenario 3: Contact Form Test

1. **Locate Contact Section** - Should show "Let's Connect" heading
2. **Click "📧 Send Email" button**
   - Expected: Mail client opens (or shows mail compose dialog)
   - Subject line: "Let's Collaborate!"
   - Pre-filled message visible
   - [ ] PASS / [ ] FAIL

3. **Email Address Link**
   - Clicking email address should also open mail client
   - [ ] PASS / [ ] FAIL

---

## Performance Checks

### With DevTools Open (F12)

1. **Open Performance Tab**
   - Record 5 seconds of scrolling
   - Look for smooth frame rate (60 FPS)
   - No jank or stuttering
   - [ ] PASS / [ ] FAIL

2. **Check Memory Usage**
   - No memory leaks when scrolling
   - Steady memory consumption
   - [ ] PASS / [ ] FAIL

---

## Accessibility Checks

1. **Keyboard Navigation**
   - [ ] Can tab through nav items
   - [ ] Can activate nav items with Enter
   - [ ] Focus indicators are visible

2. **Screen Reader (if available)**
   - [ ] Nav items are announced with proper labels
   - [ ] Contact section is announced correctly
   - [ ] Form fields are properly labeled

3. **Color Contrast**
   - [ ] Active indicator has good contrast
   - [ ] Tooltip text is readable
   - [ ] Email link is understandable

---

## Troubleshooting

### Issue: Floating Nav Not Appearing
- **Solution**: Check if using mobile view (< 768px) - nav is hidden on mobile by design
- **Solution**: Check browser console for errors
- **Solution**: Clear browser cache and refresh

### Issue: Active Section Not Updating
- **Solution**: Ensure all sections have proper IDs (home, about, skills, experience, projects, contact)
- **Solution**: Try a hard refresh (Ctrl+Shift+R)
- **Solution**: Check browser console for IntersectionObserver errors

### Issue: Contact Section Not Visible
- **Solution**: Scroll to bottom of page
- **Solution**: Check if contact component is imported in `page.tsx`
- **Solution**: Verify no CSS is hiding the contact section

### Issue: Email Button Not Working
- **Solution**: Configure default mail client on your device
- **Solution**: Check if popup is being blocked by browser
- **Solution**: Verify email is configured in `contact.tsx` (andreafirdausr@gmail.com)

---

## Expected Results Summary

| Feature | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Floating Nav Visible | Yes | No | ✅ |
| Active Section Indicator | Yes | N/A | ✅ |
| Smooth Scroll | Yes | Yes | ✅ |
| Hover Tooltips | Yes | N/A | ✅ |
| Contact Section | Yes | Yes | ✅ |
| Email Functionality | Yes | Yes | ✅ |

---

## Sign-Off

After completing all checks:

- [ ] Desktop testing PASSED
- [ ] Mobile testing PASSED
- [ ] Contact section WORKING
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Ready for production

---

**Test Date**: ____________
**Tested By**: ____________
**Status**: ☐ PASS ☐ FAIL
