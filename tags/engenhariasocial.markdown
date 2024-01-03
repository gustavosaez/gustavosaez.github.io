---
layout: tag
title: "Tag: Engenharia Social"
permalink: /tag/engenhariasocial
exclude: true
---

<ul class="post-list">
    {%- for post in site.tags["engenhariasocial"] -%}
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