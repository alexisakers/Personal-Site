---
layout: default
title: Projects
---

Here's an overview of the projects I've worked on. You can find my open-source work on [GitHub](https://github.com/{{ site.github_username }}).
    
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