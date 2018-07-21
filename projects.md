---
layout: default
title: Alexis Aubry
page_name: Projects
lang: en
---

Here's an overview of the projects I've worked on. My open-source work can be found on <a href="https://github.com/alexaubry" target="_blank">GitHub</a>.
    
<div id="projects">
    
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