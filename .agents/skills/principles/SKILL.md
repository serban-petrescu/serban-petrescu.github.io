---
name: principles
description: Maintains docs/principles.md, the living list of Serban's core beliefs, and checks posts and debate positions against it. Use after writing a post or finishing a debate, or when checking an argument for consistency with his past positions.
---

# Principles Management

## Purpose

Maintain a living document (`docs/principles.md`) of Serban's core beliefs and positions. This ensures internal logical consistency across posts, debates, and arguments. Principles help verify we're not contradicting previous stances without good reason.

## When to Update Principles

### After Writing a LinkedIn Post
- Review the post for core beliefs expressed
- Check if any new principles emerged
- Add them to the appropriate category
- Verify no contradictions with existing principles

### After a Debate
- Extract key positions defended successfully
- Identify beliefs that guided the arguments
- Add principles that proved foundational to the stance

### When Asked to Challenge a View
- Check `docs/principles.md` first
- Note if the challenge would contradict existing principles
- If contradiction exists, either align with principles or flag for discussion

## What Qualifies as a Principle

### Good Principles
- **Prescriptive**: Guides actual decisions ("Overtime should be rare and time-boxed")
- **General**: Applies across multiple contexts
- **Specific enough**: Not vague platitudes
- **Falsifiable**: Someone could disagree with it
- **Actionable**: Can guide concrete choices
- **Concrete**: Even if rooted in a meta-principle, state it specifically

### NOT Principles
- Personal experiences ("I worked at a German company")
- Factual claims ("AWS had an outage")
- Opinions about specific products ("Jira is bloated")
- Vague platitudes ("Quality matters")
- Abstract statements without actionable guidance

### Prefer Concrete over Abstract

**Better**: "Hype cycles consistently overshoot timelines by 5-10x; evaluate bold predictions with historical precedent"
- Specific, quantified, actionable

**Worse**: "Be skeptical of hype"
- Too vague, not actionable

**Better**: "Technical feasibility doesn't guarantee market adoption; social and behavioral barriers often dominate"
- Concrete claim about what matters most

**Worse**: "Reality is messy"
- True but not actionable on its own

**Key point**: Even when a concrete principle is rooted in a meta-principle like "Reality is messy," add the concrete version. Meta-principles provide philosophical grounding, but concrete principles guide actual decisions.

### Examples

**Good**: "Deliberately choosing your reliability stance is professional; accidentally having no stance is negligent."
- Prescriptive, general, actionable, someone could disagree

**Bad**: "AWS's UX is terrible."
- Specific opinion, not generalizable

**Good**: "AI impacts every discipline; above-average contributions remain valuable while average ones become replaceable."
- General belief about technology impact, guides thinking

**Bad**: "I've seen companies burn out."
- Observation, not a principle

**Good**: "Adoption friction is primarily about habits, network effects, and learning curves, not technical capability"
- Concrete, specific about what matters, actionable

**Bad**: "Adoption is hard"
- Vague, not helpful

## Extraction Process

### From LinkedIn Posts
1. **Read the post** looking for "should/must/need to" statements
2. **Identify the core argument** - what belief drives the position?
3. **Generalize it** - remove post-specific context
4. **Write as prescriptive statement** - "X should Y" or "Z is essential for W"
5. **Check for duplicates** - might already exist in different words
6. **Categorize** - which H2 section does it belong to?

### From Debates
1. **Review the Final Performance Summary** - what positions were defended?
2. **Look at opening/closing statements** - foundational beliefs show up there
3. **Identify repeated themes** - beliefs that guided multiple responses
4. **Extract the underlying rule** that made the argument work
5. **Add to `docs/principles.md`** under appropriate category

## Structure of `docs/principles.md`

### Categories (H2s)
- **Meta Principles**: Overarching beliefs that underpin everything
- **Work Culture & Productivity**: Work hours, overtime, effort, balance
- **AI & Technology Impact**: How AI affects roles and value
- **Engineering & Technical Practices**: Software development beliefs
- **Reliability & Infrastructure**: Uptime, disaster recovery, vendor dependencies
- **Leadership & Management**: How to lead teams effectively
- **Professional Development**: Career growth, skill building

Add new categories as needed when principles don't fit existing ones.

### Format
```markdown
## Category Name

- Principle statement as complete sentence
- Another principle statement
- Yet another principle
```

Keep it flat - no sub-bullets, no nesting.

## Checking for Consistency

### Before Publishing a Post
1. **Review `docs/principles.md`** for relevant categories
2. **Check for contradictions** - does the post contradict any principle?
3. **If contradiction exists**:
   - Either revise the post to align
   - Or note that you're evolving/updating the principle
   - Update `docs/principles.md` if the new position is stronger

### During a Debate
1. **Reference principles** to strengthen arguments ("This aligns with my belief that...")
2. **Flag contradictions** in Coaching Corner if Serban argues against his own principles
3. **Note new principles** that emerge from the debate

### When Writing Multiple Posts
- Scan principles before starting to ensure consistent voice
- Use principles as inspiration for new post angles
- Build on existing principles rather than contradicting them

## Maintenance

### Regular Review
Periodically review `docs/principles.md` to:
- **Consolidate duplicates** expressed in different words
- **Sharpen vague statements** into more actionable principles
- **Archive outdated beliefs** if positions have genuinely evolved
- **Elevate patterns** - if 3-4 specific principles share a theme, consider a meta-principle

### Evolution is OK
Principles can change, but should change deliberately:
- Note when a principle is being updated
- Explain why (new evidence, better reasoning, context changed)
- Don't just silently contradict past positions

## Example Extraction

**Post excerpt**: "The AWS outage has everyone saying every SaaS needs multi-cloud. But if you're a meeting assistant with a few thousand users, being down for a day over three years isn't catastrophic."

**Extraction**:
- Core belief: Not all products need the same reliability standards
- Generalize: Reliability requirements should match what you're building
- Category: Reliability & Infrastructure
- Add to `docs/principles.md`

**Post excerpt**: "Skills grow much faster when you are challenged. That does not happen if you only do the bare minimum."

**Extraction**:
- Core belief: Challenge drives growth, coasting drives obsolescence
- Generalize: Exposure to challenging problems compounds growth faster than coasting
- Category: Professional Development
- Add to `docs/principles.md`

## Collaboration Flow

When Serban writes a post:
1. After draft is complete, review for principles
2. Check `docs/principles.md` for contradictions
3. If new principles emerged, suggest adding them
4. If contradictions exist, flag them for discussion
5. Update `docs/principles.md` after Serban confirms

When principles need updating:
1. Propose the change with reasoning
2. Wait for Serban's confirmation
3. Update the file
4. Consider if related principles also need adjustment
