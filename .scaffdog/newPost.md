---
name: 'New Post'
root: 'src/content/posts'
output: '**/*'
ignore: []
questions:
  slug: 'slug?'
  title: 'title?'
  tags: 'tags?'
---

# `{{ inputs.slug }}.md`

```markdown
---
title: {{ inputs.title }}
tags: [{{ inputs.tags | split " " }}]
description:
createdAt: {{ date "YYYY-MM-DD" }}
updatedAt: {{ date "YYYY-MM-DD" }}
---
```