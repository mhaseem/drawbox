function drawBox(width, height) {
  let top = '┌' + '─'.repeat(width - 2) + '┐\n';
  let middle = ('│' + ' '.repeat(width - 2) + '│\n').repeat(height - 2);
  let bottom = '└' + '─'.repeat(width - 2) + '┘\n';
  console.log(top + middle + bottom);
}

drawBox(10, 5);
