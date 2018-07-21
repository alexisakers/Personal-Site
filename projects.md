---
layout: default
title: Alexis Aubry
page_name: Projects
lang: en
---

Here's an overview of the projects I've worked on. 

You can read my CV <a href="/cv/Alexis_Aubry_CV_01-2018.pdf" target="_blank">here</a> (and <a href="/cv/Alexis_Aubry_CV_01-2018_fr.pdf" target="_blank">there</a> in French).
My open-source work can be found on <a href="https://github.com/alexaubry" target="_blank">GitHub</a>.
    
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