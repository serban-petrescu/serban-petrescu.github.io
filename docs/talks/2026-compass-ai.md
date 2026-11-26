# Compass AI 2026: Your Vision Model Is Biased

Delivered on 1 October 2026. Slides and PDF: `public/presentations/2026-compass-ai-your-vision-model-is-biased/`. The submission went to the organisers (Greta) by email.

## Submission

**Title:** Your Vision Model Is Biased: Lessons From Shipping Real-Time Video Detection

**Level:** Advanced

**Topic / Category:** AI / ML

**Abstract:**

We put students in front of a webcam to protect the integrity of remote standardized tests. Then our production pipeline started flagging kids for phone use while they drank from a water bottle. On the hard cases, two times out of three.

This talk is how to build near-real-time detection on vision LLMs. I'll walk the pipeline end to end: segmenting live video, running VLM passes over short windows, and turning raw model output into signals you can trust.

Every lesson here was measured against a human-annotated data set. The video format you send moves accuracy more than the model you pick: one input change cut false positives by 27 points. Telling the model to "be careful" buys almost nothing, because vision-model language priors override the pixels, a failure two 2026 papers quantify. Two frontier models were unusable for us.

And evaluation, not generation, is the hard part. When two annotators watched the same video and disagreed on what counted as cheating, we handed the same footage to ten people, just to force the argument out into the open. That pushed us to write an objective grading rubric for our annotation team, then to rebuild the scoring logic around difficulty and ambiguity instead of a flat pass or fail.

You leave with a repeatable way to build and evaluate vision detection pipelines, and a sharper distrust of your own metrics.
