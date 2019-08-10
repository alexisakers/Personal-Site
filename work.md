---
layout: default
title: Alexis Aubry
page_name: Work
lang: en
---

<div id="projects">
    <h2 id="toc">Projects</h2>

    <ul>
        {% for project in site.data.projects %}
         <li><a href="#{{ project.id }}">{{ project.name }}</a></li>
        {% endfor %}
        <li> <a href="https://github.com/alexaubry" target="_blank">More on Github</a><span aria-hidden="true"> &rarr;</span></li>
    </ul>

    {% for project in site.data.projects %}
    <table>
        <tbody>
            <tr>
                <td>
                    {% include item.html item=project %}
                </td>
            </tr>
        </tbody>
    </table>
    {% endfor %}
    
</div>