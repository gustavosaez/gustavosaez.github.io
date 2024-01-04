---
layout: tag
title: "Tag: GDPR"
permalink: /tag/gdpr
exclude: true
---

<ul class="post-list">
    {%- for post in site.tags["gdpr"] -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span class="post-meta">
            {{ post.date | date: date_format }}
        </span>
        <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
            </a>
        </h3>
    </li>
    {%- endfor -%}
</ul>