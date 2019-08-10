---
layout: default
title: Alexis Aubry
page_name: Talks
lang: en
---

<div id="talks">
    <h2 id="toc">Talks</h2>

    <ul>
        {% for talk in site.data.talks %}
         <li><a href="#{{ talk.id }}">{{ talk.name }}</a></li>
        {% endfor %}
    </ul>

    {% for talk in site.data.talks %}
    <table>
        <tbody>
            <tr>
                <td>
                    {% include item.html item=talk %}
                </td>
            </tr>
        </tbody>
    </table>
    {% endfor %}
</div>