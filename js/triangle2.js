for (var i = 0; i < 5; i++) {
    for (var j = 0; j < i; j++) {
      document.write(" ");
    }
    for (var j = 5; j > i; j--) {
      document.write("*");
      if (j > i + 1) document.write(" ");
    }
    document.write('<br/>');
  }