---
layout: default
title: Alexis Aubry
page_name: Projects
lang: en
---
    
<div id="projects">
    <div class="topic-badge-container">
        {% for project in site.data.projects %}
        {% if project.isFeatured == "true" %}
        <div class="topic-badge" style="background: {{ project.tint }}"><a class="no-border" style="color: {{ project.text }}" href="#{{ project.id }}">{{ project.name }}</a></div>
        {% endif %}
        {% endfor %}
    </div>
    <a class="callout" href="https://github.com/alexaubry" target="_blank">More on Github</a>

    {% for project in site.data.projects %}
    <table>
        <tbody>
            <tr>
                <td>
                    {% include project.html project=project %}
                </td>
            </tr>
        </tbody>
    </table>
    {% endfor %}
    
</div>