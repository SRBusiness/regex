// https://github.com/facebook/react/issues/3386
// https://stackoverflow.com/questions/29652862/highlight-text-using-reactjs
// https://www.vladopandzic.com/react/creating-react-highlighter-component/
// https://developer.telerik.com/topics/web-development/highlight-text-within-string-using-angular-regular-expressions/

/**
 * Find and highlight mention given a matching pattern within a block of text
 * @param {string} text - The text to parse
 * @param {array} values - Values to highlight
 * @param {RegExp} regex - The search pattern to highlight
 * @return {object} A JSX object containing an array of alternating strings and JSX
 */
const formatMentionText = (text, values, regex) => {
    if (!values.length)
        return text;

    return (<div>
        {text.split(regex)
            .reduce((prev, current, i) => {
                if (!i)
                    return [current];

                return prev.concat(
                    values.includes(current)  ?
                        <mark key={i + current}>
                            {current}
                        </mark>
                        : current
                );
            }, [])}
    </div>);
};

const text = 'Lorem ipsum dolor sit amet [[Jonh Doe]] and [[Jane Doe]]';
const values = ['Jonh Doe', 'Jane Doe'];
// const reg = new RegExp(/\[\[(.*?)\]\]/); // Match text inside two square brackets
const reg = new RegExp(/lorem/)

console.log(formatMentionText(text, values, reg));
// Lorem ipsum dolor sit amet <mark>Jonh Doe</mark> and <mark>Jane Doe</mark>


/**
 * Find and highlight relevant keywords within a block of text
 * @param  {string} label - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {object} A JSX object containing an array of alternating strings and JSX
 */
const formatLabel = (label, value) => {
  if (!value) {
    return label;
  }
  return (<span>
    { label.split(value)
      .reduce((prev, current, i) => {
        if (!i) {
          return [current];
        }
        return prev.concat(<b key={value + current}>{ value }</b>, current);
      }, [])
    }
  </span>);
};

formatLabel('Lorem ipsum dolor sit amet', 'dolor');
// <span>Lorem ipsum <b>dolor</b> sit amet</span>
