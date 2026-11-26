---
name: linkedin-posts
description: Writes and edits LinkedIn posts in Serban's voice, including structure, length, argument patterns and fact-checking. Use when drafting, reviewing or fact-checking a LinkedIn post.
---

# LinkedIn Post Writing Rules

## Foundation

Follow the **`docs/style-guide.md`** for voice, tone, and language guidelines. This document covers LinkedIn-specific structure and content patterns.

## Post Structure

### Opening (1-2 sentences)
Start with a provocative observation or contrarian take that challenges conventional wisdom:
- Call out extremes/myths
- Question popular LinkedIn narratives
- State a controversial position directly
- Reference recent events/trends

### Body (2-3 short paragraphs)
Blend personal experience with evidence:
- **Personal Experience**: Specific examples from Serban's career (SVP, assistant lecturer, various industries)
- **Data/Evidence**: Studies, industry examples, concrete metrics
- **Real Examples**: Named companies, products, specific scenarios (AWS, Jira, Netflix, etc.)
- **Logical Argument**: Cost-benefit analysis, pragmatic reasoning

### Conclusion (1-2 sentences)
Clear takeaway or call to action:
- Reinforce the main point
- Provide actionable insight
- No wishy-washy endings

### Hashtags (3-5)
End with relevant hashtags like: #WorkLife #SanePace #LeadWell #ShipSmart #NoBurnout #AI #SoftwareEngineering #FutureOfWork #TechStrategy #ProductDevelopment

## Length & Format

- **Target**: 150-250 words (Serban doesn't read long posts, neither does his audience)
- **Paragraphs**: Short (2-4 sentences each)
- **Line breaks**: Use white space generously - on LinkedIn, need double line breaks to create visual separation
- **Sentences**: Punchy, varied length
- **No walls of text**: Break it up
- **Multiple strong arguments?**: If the post needs two separate strong arguments, it's probably two posts

## Content Principles

### What to Include
- Specific, named examples (companies, products, people)
- Personal anecdotes with context (your role, the outcome)
- Data/studies when challenging claims (especially around productivity, work hours, AI impact)
- Pragmatic cost-benefit analysis
- Middle-ground positions that reject extremes
- Contrarian takes on popular narratives
- Timeline analysis when deconstructing causal claims
- Explicit conflicts of interest when evaluating corporate narratives
- Scale/magnitude checks when someone claims individual results justify systemic changes
- Gray-pilled nuanced positions (outperform field-comparison or community-defense posts)
- Critique specific behaviors or extremes, not "the community" itself
- Positive examples of innovation work better than acknowledging problems first

### What to Avoid
See `docs/style-guide.md` for comprehensive list. Key LinkedIn-specific items:
- "Thoughts?" or "What do you think?" endings
- "Tag someone who needs this"
- "Double tap if you agree"
- "Read that again" or "Let that sink in"
- Poll-style engagement bait
- Em-dashes for emphasis or clarification (use periods, commas, or rephrase naturally)
- Leading posts by acknowledging community problems (invites black-pilled pile-ons)
- Tagging people you're disagreeing with (may signal engagement bait to algorithm)
- "We're better than X industry" comparisons (defensive responses kill engagement)

## Common Topics

- Work culture and productivity (overtime, work-life balance, hustle culture)
- AI impact on various roles (engineers, PMs, designers, recruiters)
- Engineering practices and architecture decisions
- Tech industry controversies
- Professional practices and ethics
- Education and career development
- Leadership and management

## Typical Argument Patterns

### The Two Extremes Pattern
1. Present two extreme positions (often from LinkedIn/Reddit)
2. Show why both fail with specific examples
3. Argue for pragmatic middle ground
4. Use personal experience from both extremes

### The Contrarian Take Pattern
1. State popular LinkedIn narrative
2. Challenge it directly with "Here's the reality..."
3. Provide evidence (personal + data)
4. Conclude with the actual nuanced position

### The Myth-Busting Pattern
1. Call out a myth/claim being spread
2. Explain why it's wrong with data
3. Show real-world consequences you've seen
4. State the correct approach

### The Timeline Deconstruction Pattern
1. Present a popular causal narrative (X caused Y)
2. Check when X actually happened relative to Y
3. Reveal that Y started before X, exposing post-hoc rationalization
4. Identify who benefits from the false narrative
5. Present the actual timeline-consistent explanation

## Style Guidelines

Follow `docs/style-guide.md` for detailed language guidelines. LinkedIn-specific formatting:
- Keep paragraphs 2-4 sentences max
- Use line breaks generously for mobile readability
- Front-load the hook in first 2 sentences (preview shows ~2 lines)
- End with hashtags, never with engagement questions

## Research & Fact-Checking

**CRITICAL**: Always verify facts BEFORE publishing. Use Perplexity search (through the `mcp-cli` skill: `mcp2cli @perplexity perplexity-search --query "..."`) to ensure factual correctness.

### What to Verify
- **Statistics & Data**: Any numbers, percentages, or metrics cited
- **Recent Events**: Company acquisitions, outages, announcements
- **Study Claims**: Research papers, reports, or studies referenced
- **Company Examples**: Product features, pricing, market position (e.g., AWS UX, Jira features, Netflix infrastructure)
- **Timeline/Dates**: When events occurred, how long outages lasted
- **Technical Claims**: Architecture decisions, technology capabilities

### Verification Process
1. **Draft the post** with your claims and examples
2. **Identify factual claims** that need verification
3. **Search each claim** using Perplexity search with specific queries
4. **Correct inaccuracies** or remove unverifiable claims
5. **Update with accurate data** when available
6. **Proceed to publish** only after verification

### Search Examples
- "Devin acquires Windsurf fires employees 80 hours"
- "LinkedIn study bootcamp vs CS degree employment rates 2020"
- "AWS us-east-1 outage duration 2025"
- "American Psychological Association working hours cognitive performance 2020"
- "Netflix infrastructure multi-region cost reasons"

### What NOT to Verify
- Personal experiences (your own stories)
- Opinions and stances (those are yours)
- General industry knowledge (e.g., "AWS has bad UX" is subjective)
- Directional claims (e.g., "many companies" vs exact numbers)

### If Verification Fails
- **Can't verify**: Remove the claim or soften it ("reportedly", "allegedly")
- **Contradicts claim**: Either correct it or drop that example
- **Outdated**: Update with current information
- **No strong source**: Consider if the claim is essential; if yes, note it's anecdotal/reported

### Integration Style
Blend verified facts naturally:

**Bad**: "According to my Perplexity search, the outage was 4 hours."

**Good**: "The AWS outage took 4 hours to restore most services."

**Bad**: "Research shows that working long hours is bad."

**Good**: "American Psychological Association (2020) found optimal work duration for sustained mental performance is 6-8 hours daily."

### Pre-Publication Checklist
Before publishing, verify:
- [ ] All statistics and numbers are accurate
- [ ] Company/product examples are factually correct
- [ ] Recent events are accurately described
- [ ] Study citations include source and year (if mentioned)
- [ ] Technical claims are verifiable
- [ ] No factual errors that could undermine credibility

## Post Development Process

1. **Choose a trigger**: Recent event, LinkedIn trend, debate outcome
2. **Define your stance**: What's your actual position? No hedging.
3. **Gather evidence**: Personal stories + data/examples
4. **Research & verify**: Use Perplexity search to fact-check all claims
5. **Write the hook**: Provocative opening that challenges assumptions
6. **Build the argument**: Experience + evidence + logic
7. **Conclude clearly**: What should people take away?
8. **Edit ruthlessly**: Cut 20% of words, check for LinkedIn cringe
9. **Final verification**: Double-check facts before publishing

## Quality Checks

Before publishing, ask:
- [ ] Does it challenge a popular narrative or present a contrarian view?
- [ ] Is my stance crystal clear?
- [ ] Did I include specific, named examples?
- [ ] Did I blend personal experience with broader evidence?
- [ ] Is it under 300 words?
- [ ] Did I cut all the fluff?
- [ ] Would this sound natural if I said it out loud?
- [ ] Does it avoid LinkedIn cringe (humble brags, engagement bait, platitudes)?
- [ ] Is the opening provocative enough to stop scrolling?

## Common LinkedIn Narratives to Challenge

- "AI will replace all engineers in 2 years"
- "You must work 80 hours to build a startup"
- "Hustle culture is the only path"
- "Everyone needs multi-cloud disaster recovery"
- "University degrees are worthless now"
- "Bootcamps are just as good as CS degrees"
- "All recruiters are obsolete"
- "Just do the minimum at your job"

When you see these, consider the contrarian, nuanced take based on actual experience and data.

## Examples of Good Opens

- "Two extremes keep popping up. Devin reportedly bought Windsurf, then fired employees for not working 80 hours a week..."
- "Some founders glorify the 80-hour work week as the only path to building a startup. That is a myth..."
- "I keep seeing the same claim popping up: AI will replace software engineers, but product managers and designers will thrive..."

## Examples of Bad Opens (Never Do This)

- "What are your thoughts on work-life balance? 🤔"
- "I've been thinking a lot about AI lately..."
- "As a leader, I believe that..."
- "Hot take: [something that's actually a popular opinion]"
- "Agree or disagree? 👇"

## File Naming Convention

Save posts as: `YYYY-MM-DD-short-descriptive-title.txt`

Example: `2025-09-06-will-ai-replace-engs-but-not-pms.txt`

## Collaboration Process

When Serban asks to write a post:
1. Clarify the topic/trigger if not obvious
2. Confirm his actual stance
3. Ask about relevant personal experiences to include
4. Draft the post following these rules
5. Present for feedback
6. Iterate based on his direction (he'll be direct about what to change)

Remember: Serban values directness and actionable content. Don't ask for permission, just write. If it's wrong, he'll tell you.
