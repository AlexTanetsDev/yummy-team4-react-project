import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
   
      @font-face {
        font-family: NotoColorEmojiLimited;
        unicode-range: U+1F1E6-1F1FF;
        src: url(https://raw.githack.com/googlefonts/noto-emoji/main/fonts/NotoColorEmoji.ttf);
      }
  
body {
  margin: 0;
  font-family: 'NotoColorEmojiLimited','Poppins', sans-serif;
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

*{
transition: all, 0.5s, ease-in;
}


`;
