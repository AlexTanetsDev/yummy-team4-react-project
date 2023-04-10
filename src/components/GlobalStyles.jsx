import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: ${p => p.theme.colors.mainBgColor};
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
h1, h2 {
  padding: 0;
  margin: 0;
}
img{
  max-width: 100%;
  height: auto;
  display: block;
}
p{
  padding: 0;
  margin: 0;
}
button, a {
  cursor: pointer;
	text-decoration:none;
}




`;
