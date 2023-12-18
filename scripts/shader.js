  const discoButton = document.querySelector('button');
  let discoMode = false;

  function disco() {
    discoMode = !discoMode;
    const discoButton = document.querySelector('.disco');
    discoButton.classList.toggle('active', discoMode);

    if (discoMode) {
      discoButton.textContent = '❎';
    } else {
      discoButton.textContent = '🎉';
    }
    activate();
  }


  const vertexShaderSource = `
        attribute vec4 a_position;
        void main() {
          gl_Position = a_position;
        }
      `;

  const fragmentShaderSource = `
      precision mediump float;
      uniform float u_time;
      void main() {
        // Zmniejszenie jasności koloru
        gl_FragColor = vec4(sin(u_time) * 0.5, cos(u_time) * 0.5, 0.25, 1.0);
      }
    `;
    

  const fragmentDefaultSource = `
      precision mediump float;
      uniform float u_time;
      void main() {
        gl_FragColor = vec4(0.0627, 0.0627, 0.0627, 1.0);
      }
    `;

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  function activate() {
    const canvas = document.getElementById('webgl-canvas');
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('Unable to initialize WebGL. Your browser may not support it.');
      return;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = discoMode ? createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource) : createShader(gl, gl.FRAGMENT_SHADER, fragmentDefaultSource);

    const program = createProgram(gl, vertexShader, fragmentShader);

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1, -1,
      1, -1,
      -1,  1,
      1,  1,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(positionAttributeLocation);

    gl.useProgram(program);

    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

    function render() {
      const time = performance.now() / 1000;
      gl.uniform1f(timeUniformLocation, time);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    }

    render();
  }