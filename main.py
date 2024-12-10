from flask import Flask, render_template
import markdown
from markdown.extensions.fenced_code import FencedCodeExtension
from markdown.extensions.codehilite import CodeHiliteExtension
import os
from pygments.formatters import HtmlFormatter

app = Flask(__name__)

def read_markdown(filename):
    content_path = os.path.join('content', filename)
    with open(content_path, 'r', encoding='utf-8') as f:
        content = f.read()
        # Настраиваем расширения с дополнительными опциями
        md = markdown.Markdown(
            extensions=[
                FencedCodeExtension(),
                CodeHiliteExtension(
                    css_class='highlight',
                    pygments_style='monokai',
                    use_pygments=True,
                    noclasses=True
                ),
                'tables',
                'markdown.extensions.attr_list'
            ]
        )
        html_content = md.convert(content)
        return html_content

@app.route('/')
def index():
    content = read_markdown('index.md')
    # Получаем CSS для подсветки синтаксиса
    pygments_css = HtmlFormatter(style='monokai').get_style_defs('.highlight')
    return render_template('base.html', content=content, pygments_css=pygments_css)

if __name__ == '__main__':
    app.run(debug=True)
