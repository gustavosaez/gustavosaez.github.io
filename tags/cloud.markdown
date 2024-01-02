---
layout: tag
title: "Tag: cloud"
permalink: /tag/cloud
---

<ul class="post-list">
    {%- for post in site.tags["cloud"] -%}
    <li>
        {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
        <span>
            {{ post.date | date: date_format }}
        </span>
        <h3>
            <aa class="post-link" href="{{ post.url | relative_url }}">
            {{ post.title | escape }}
        </h3>
    </li>
    {%- endfor -%}
</ul>