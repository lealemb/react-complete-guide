import {useState} from 'react';
const Content = () => {
      const [items, setItems] = useState ([

          {
            id: 1,
            checked: false,
            item: "one half pound of Coca Coverd Almonds Unsalted"
          },

          {
            id: 2,
            checked: false,
            item: "item 2"
          },

          {
            id: 3,
            checked: false,
            item: "item 3"
          }
        ]);
  return (
    <main>
        <ul>
            {items.map((item) => (
              <li className='item'>
                <input type="checkbox"
                checked={item.checked} />
                <label> {item.item}</label>

              </li>
            ))}
        </ul>
    </main>
  )
}

export default Content
