'use strict';

import React from 'react'
import '../scss/Skills.scss'
import Script from 'react-load-script'

const THREE = require('three');
//const TWEEN = require('three/examples/js/libs/tween.min.js');

class Skills extends React.Component {
  componentDidMount() {

    // tween.js - http://github.com/sole/tween.js
    var TWEEN=TWEEN||function(){var a=[];return{REVISION:"7",getAll:function(){return a},removeAll:function(){a=[]},add:function(c){a.push(c)},remove:function(c){c=a.indexOf(c);-1!==c&&a.splice(c,1)},update:function(c){if(0===a.length)return!1;for(var b=0,d=a.length,c=void 0!==c?c:Date.now();b<d;)a[b].update(c)?b++:(a.splice(b,1),d--);return!0}}}();
    TWEEN.Tween=function(a){var c={},b={},d=1E3,e=0,f=null,h=TWEEN.Easing.Linear.None,r=TWEEN.Interpolation.Linear,k=[],l=null,m=!1,n=null,p=null;this.to=function(a,c){null!==c&&(d=c);b=a;return this};this.start=function(d){TWEEN.add(this);m=!1;f=void 0!==d?d:Date.now();f+=e;for(var g in b)if(null!==a[g]){if(b[g]instanceof Array){if(0===b[g].length)continue;b[g]=[a[g]].concat(b[g])}c[g]=a[g]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(a){e=a;return this};this.easing=
    function(a){h=a;return this};this.interpolation=function(a){r=a;return this};this.chain=function(){k=arguments;return this};this.onStart=function(a){l=a;return this};this.onUpdate=function(a){n=a;return this};this.onComplete=function(a){p=a;return this};this.update=function(e){if(e<f)return!0;!1===m&&(null!==l&&l.call(a),m=!0);var g=(e-f)/d,g=1<g?1:g,i=h(g),j;for(j in c){var s=c[j],q=b[j];a[j]=q instanceof Array?r(q,i):s+(q-s)*i}null!==n&&n.call(a,i);if(1==g){null!==p&&p.call(a);g=0;for(i=k.length;g<
    i;g++)k[g].start(e);return!1}return!0}};
    TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return 1>(a*=2)?0.5*a*a:-0.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a:0.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*
    a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return 0.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:1>(a*=2)?0.5*Math.pow(1024,a-1):0.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-
    Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return-(b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4))},Out:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return b*Math.pow(2,-10*a)*Math.sin((a-c)*
    2*Math.PI/0.4)+1},InOut:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return 1>(a*=2)?-0.5*b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4):0.5*b*Math.pow(2,-10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4)+1}},Back:{In:function(a){return a*a*(2.70158*a-1.70158)},Out:function(a){return--a*a*(2.70158*a+1.70158)+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*(3.5949095*a-2.5949095):0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)}},Bounce:{In:function(a){return 1-
    TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},InOut:function(a){return 0.5>a?0.5*TWEEN.Easing.Bounce.In(2*a):0.5*TWEEN.Easing.Bounce.Out(2*a-1)+0.5}}};
    TWEEN.Interpolation={Linear:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),f=TWEEN.Interpolation.Utils.Linear;return 0>c?f(a[0],a[1],d):1<c?f(a[b],a[b-1],b-d):f(a[e],a[e+1>b?b:e+1],d-e)},Bezier:function(a,c){var b=0,d=a.length-1,e=Math.pow,f=TWEEN.Interpolation.Utils.Bernstein,h;for(h=0;h<=d;h++)b+=e(1-c,d-h)*e(c,h)*a[h]*f(d,h);return b},CatmullRom:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),f=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[b]?(0>c&&(e=Math.floor(d=b*(1+c))),f(a[(e-
    1+b)%b],a[e],a[(e+1)%b],a[(e+2)%b],d-e)):0>c?a[0]-(f(a[0],a[0],a[1],a[1],-d)-a[0]):1<c?a[b]-(f(a[b],a[b],a[b-1],a[b-1],d-b)-a[b]):f(a[e?e-1:0],a[e],a[b<e+1?b:e+1],a[b<e+2?b:e+2],d-e)},Utils:{Linear:function(a,c,b){return(c-a)*b+a},Bernstein:function(a,c){var b=TWEEN.Interpolation.Utils.Factorial;return b(a)/b(c)/b(a-c)},Factorial:function(){var a=[1];return function(c){var b=1,d;if(a[c])return a[c];for(d=c;1<d;d--)b*=d;return a[c]=b}}(),CatmullRom:function(a,c,b,d,e){var a=0.5*(b-a),d=0.5*(d-c),f=
    e*e;return(2*c-2*b+a+d)*e*f+(-3*c+3*b-2*a-d)*f+a*e+c}}};

    /**
     * Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
     * @author mrdoob / http://mrdoob.com/
     */

    THREE.CSS3DObject = function ( element ) {

      THREE.Object3D.call( this );

      this.element = element;
      this.element.style.position = 'absolute';

      this.addEventListener( 'removed', function () {

        if ( this.element.parentNode !== null ) {

          this.element.parentNode.removeChild( this.element );

        }

      } );

    };

    THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );
    THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;

    THREE.CSS3DSprite = function ( element ) {

      THREE.CSS3DObject.call( this, element );

    };

    THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );
    THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;

    //

    THREE.CSS3DRenderer = function () {

      console.log( 'THREE.CSS3DRenderer', THREE.REVISION );

      var _width, _height;
      var _widthHalf, _heightHalf;

      var matrix = new THREE.Matrix4();

      var cache = {
        camera: { fov: 0, style: '' },
        objects: {}
      };

      var domElement = document.createElement( 'div' );
      domElement.style.overflow = 'hidden';

      this.domElement = domElement;

      var cameraElement = document.createElement( 'div' );

      cameraElement.style.WebkitTransformStyle = 'preserve-3d';
      cameraElement.style.MozTransformStyle = 'preserve-3d';
      cameraElement.style.transformStyle = 'preserve-3d';

      domElement.appendChild( cameraElement );

      var isIE = /Trident/i.test( navigator.userAgent );

      this.setClearColor = function () {};

      this.getSize = function () {

        return {
          width: _width,
          height: _height
        };

      };

      this.setSize = function ( width, height ) {

        _width = width;
        _height = height;
        _widthHalf = _width / 2;
        _heightHalf = _height / 2;

        domElement.style.width = width + 'px';
        domElement.style.height = height + 'px';

        cameraElement.style.width = width + 'px';
        cameraElement.style.height = height + 'px';

      };

      function epsilon( value ) {

        return Math.abs( value ) < 1e-10 ? 0 : value;

      }

      function getCameraCSSMatrix( matrix ) {

        var elements = matrix.elements;

        return 'matrix3d(' +
          epsilon( elements[ 0 ] ) + ',' +
          epsilon( - elements[ 1 ] ) + ',' +
          epsilon( elements[ 2 ] ) + ',' +
          epsilon( elements[ 3 ] ) + ',' +
          epsilon( elements[ 4 ] ) + ',' +
          epsilon( - elements[ 5 ] ) + ',' +
          epsilon( elements[ 6 ] ) + ',' +
          epsilon( elements[ 7 ] ) + ',' +
          epsilon( elements[ 8 ] ) + ',' +
          epsilon( - elements[ 9 ] ) + ',' +
          epsilon( elements[ 10 ] ) + ',' +
          epsilon( elements[ 11 ] ) + ',' +
          epsilon( elements[ 12 ] ) + ',' +
          epsilon( - elements[ 13 ] ) + ',' +
          epsilon( elements[ 14 ] ) + ',' +
          epsilon( elements[ 15 ] ) +
        ')';

      }

      function getObjectCSSMatrix( matrix, cameraCSSMatrix ) {

        var elements = matrix.elements;
        var matrix3d = 'matrix3d(' +
          epsilon( elements[ 0 ] ) + ',' +
          epsilon( elements[ 1 ] ) + ',' +
          epsilon( elements[ 2 ] ) + ',' +
          epsilon( elements[ 3 ] ) + ',' +
          epsilon( - elements[ 4 ] ) + ',' +
          epsilon( - elements[ 5 ] ) + ',' +
          epsilon( - elements[ 6 ] ) + ',' +
          epsilon( - elements[ 7 ] ) + ',' +
          epsilon( elements[ 8 ] ) + ',' +
          epsilon( elements[ 9 ] ) + ',' +
          epsilon( elements[ 10 ] ) + ',' +
          epsilon( elements[ 11 ] ) + ',' +
          epsilon( elements[ 12 ] ) + ',' +
          epsilon( elements[ 13 ] ) + ',' +
          epsilon( elements[ 14 ] ) + ',' +
          epsilon( elements[ 15 ] ) +
        ')';

        if ( isIE ) {

          return 'translate(-50%,-50%)' +
            'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)' +
            cameraCSSMatrix +
            matrix3d;

        }

        return 'translate(-50%,-50%)' + matrix3d;

      }

      function renderObject( object, camera, cameraCSSMatrix ) {

        if ( object instanceof THREE.CSS3DObject ) {

          var style;

          if ( object instanceof THREE.CSS3DSprite ) {

            // http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/

            matrix.copy( camera.matrixWorldInverse );
            matrix.transpose();
            matrix.copyPosition( object.matrixWorld );
            matrix.scale( object.scale );

            matrix.elements[ 3 ] = 0;
            matrix.elements[ 7 ] = 0;
            matrix.elements[ 11 ] = 0;
            matrix.elements[ 15 ] = 1;

            style = getObjectCSSMatrix( matrix, cameraCSSMatrix );

          } else {

            style = getObjectCSSMatrix( object.matrixWorld, cameraCSSMatrix );

          }

          var element = object.element;
          var cachedStyle = cache.objects[ object.id ] && cache.objects[ object.id ].style;

          if ( cachedStyle === undefined || cachedStyle !== style ) {

            element.style.WebkitTransform = style;
            element.style.MozTransform = style;
            element.style.transform = style;

            cache.objects[ object.id ] = { style: style };

            if ( isIE ) {

              cache.objects[ object.id ].distanceToCameraSquared = getDistanceToSquared( camera, object );

            }

          }

          if ( element.parentNode !== cameraElement ) {

            cameraElement.appendChild( element );

          }

        }

        for ( var i = 0, l = object.children.length; i < l; i ++ ) {

          renderObject( object.children[ i ], camera, cameraCSSMatrix );

        }

      }

      var getDistanceToSquared = function () {

        var a = new THREE.Vector3();
        var b = new THREE.Vector3();

        return function ( object1, object2 ) {

          a.setFromMatrixPosition( object1.matrixWorld );
          b.setFromMatrixPosition( object2.matrixWorld );

          return a.distanceToSquared( b );

        };

      }();

      function zOrder( scene ) {

        var order = Object.keys( cache.objects ).sort( function ( a, b ) {

          return cache.objects[ a ].distanceToCameraSquared - cache.objects[ b ].distanceToCameraSquared;

        } );
        var zMax = order.length;

        scene.traverse( function ( object ) {

          var index = order.indexOf( object.id + '' );

          if ( index !== - 1 ) {

            object.element.style.zIndex = zMax - index;

          }

        } );

      }

      this.render = function ( scene, camera ) {

        var fov = camera.projectionMatrix.elements[ 5 ] * _heightHalf;

        if ( cache.camera.fov !== fov ) {

          domElement.style.WebkitPerspective = fov + 'px';
          domElement.style.MozPerspective = fov + 'px';
          domElement.style.perspective = fov + 'px';

          cache.camera.fov = fov;

        }

        scene.updateMatrixWorld();

        if ( camera.parent === null ) camera.updateMatrixWorld();

        var cameraCSSMatrix = 'translateZ(' + fov + 'px)' +
          getCameraCSSMatrix( camera.matrixWorldInverse );

        var style = cameraCSSMatrix +
          'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)';

        if ( cache.camera.style !== style && ! isIE ) {

          cameraElement.style.WebkitTransform = style;
          cameraElement.style.MozTransform = style;
          cameraElement.style.transform = style;

          cache.camera.style = style;

        }

        renderObject( scene, camera, cameraCSSMatrix );

        if ( isIE ) {

          // IE10 and 11 does not support 'preserve-3d'.
          // Thus, z-order in 3D will not work.
          // We have to calc z-order manually and set CSS z-index for IE.
          // FYI: z-index can't handle object intersection
          zOrder( scene );

        }

      };

    };

    /**
     * @author Eberhard Graether / http://egraether.com/
     * @author Mark Lundin 	/ http://mark-lundin.com
     * @author Simone Manini / http://daron1337.github.io
     * @author Luca Antiga 	/ http://lantiga.github.io
     */

    THREE.TrackballControls = function ( object, domElement ) {

      var _this = this;
      var STATE = { NONE: - 1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

      this.object = object;
      this.domElement = ( domElement !== undefined ) ? domElement : document;

      // API

      this.enabled = true;

      this.screen = { left: 0, top: 0, width: 0, height: 0 };

      this.rotateSpeed = 1.0;
      this.zoomSpeed = 1.2;
      this.panSpeed = 0.3;

      this.noRotate = false;
      this.noZoom = false;
      this.noPan = false;

      this.staticMoving = false;
      this.dynamicDampingFactor = 0.2;

      this.minDistance = 0;
      this.maxDistance = Infinity;

      this.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];

      // internals

      this.target = new THREE.Vector3();

      var EPS = 0.000001;

      var lastPosition = new THREE.Vector3();

      var _state = STATE.NONE,
      _prevState = STATE.NONE,

      _eye = new THREE.Vector3(),

      _movePrev = new THREE.Vector2(),
      _moveCurr = new THREE.Vector2(),

      _lastAxis = new THREE.Vector3(),
      _lastAngle = 0,

      _zoomStart = new THREE.Vector2(),
      _zoomEnd = new THREE.Vector2(),

      _touchZoomDistanceStart = 0,
      _touchZoomDistanceEnd = 0,

      _panStart = new THREE.Vector2(),
      _panEnd = new THREE.Vector2();

      // for reset

      this.target0 = this.target.clone();
      this.position0 = this.object.position.clone();
      this.up0 = this.object.up.clone();

      // events

      var changeEvent = { type: 'change' };
      var startEvent = { type: 'start' };
      var endEvent = { type: 'end' };


      // methods

      this.handleResize = function () {

        if ( this.domElement === document ) {

          this.screen.left = 0;
          this.screen.top = 0;
          this.screen.width = window.innerWidth;
          this.screen.height = window.innerHeight;

        } else {

          var box = this.domElement.getBoundingClientRect();
          // adjustments come from similar code in the jquery offset() function
          var d = this.domElement.ownerDocument.documentElement;
          this.screen.left = box.left + window.pageXOffset - d.clientLeft;
          this.screen.top = box.top + window.pageYOffset - d.clientTop;
          this.screen.width = box.width;
          this.screen.height = box.height;

        }

      };

      this.handleEvent = function ( event ) {

        if ( typeof this[ event.type ] == 'function' ) {

          this[ event.type ]( event );

        }

      };

      var getMouseOnScreen = ( function () {

        var vector = new THREE.Vector2();

        return function getMouseOnScreen( pageX, pageY ) {

          vector.set(
            ( pageX - _this.screen.left ) / _this.screen.width,
            ( pageY - _this.screen.top ) / _this.screen.height
          );

          return vector;

        };

      }() );

      var getMouseOnCircle = ( function () {

        var vector = new THREE.Vector2();

        return function getMouseOnCircle( pageX, pageY ) {

          vector.set(
            ( ( pageX - _this.screen.width * 0.5 - _this.screen.left ) / ( _this.screen.width * 0.5 ) ),
            ( ( _this.screen.height + 2 * ( _this.screen.top - pageY ) ) / _this.screen.width ) // screen.width intentional
          );

          return vector;

        };

      }() );

      this.rotateCamera = ( function() {

        var axis = new THREE.Vector3(),
          quaternion = new THREE.Quaternion(),
          eyeDirection = new THREE.Vector3(),
          objectUpDirection = new THREE.Vector3(),
          objectSidewaysDirection = new THREE.Vector3(),
          moveDirection = new THREE.Vector3(),
          angle;

        return function rotateCamera() {

          moveDirection.set( _moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0 );
          angle = moveDirection.length();

          if ( angle ) {

            _eye.copy( _this.object.position ).sub( _this.target );

            eyeDirection.copy( _eye ).normalize();
            objectUpDirection.copy( _this.object.up ).normalize();
            objectSidewaysDirection.crossVectors( objectUpDirection, eyeDirection ).normalize();

            objectUpDirection.setLength( _moveCurr.y - _movePrev.y );
            objectSidewaysDirection.setLength( _moveCurr.x - _movePrev.x );

            moveDirection.copy( objectUpDirection.add( objectSidewaysDirection ) );

            axis.crossVectors( moveDirection, _eye ).normalize();

            angle *= _this.rotateSpeed;
            quaternion.setFromAxisAngle( axis, angle );

            _eye.applyQuaternion( quaternion );
            _this.object.up.applyQuaternion( quaternion );

            _lastAxis.copy( axis );
            _lastAngle = angle;

          } else if ( ! _this.staticMoving && _lastAngle ) {

            _lastAngle *= Math.sqrt( 1.0 - _this.dynamicDampingFactor );
            _eye.copy( _this.object.position ).sub( _this.target );
            quaternion.setFromAxisAngle( _lastAxis, _lastAngle );
            _eye.applyQuaternion( quaternion );
            _this.object.up.applyQuaternion( quaternion );

          }

          _movePrev.copy( _moveCurr );

        };

      }() );


      this.zoomCamera = function () {

        var factor;

        if ( _state === STATE.TOUCH_ZOOM_PAN ) {

          factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
          _touchZoomDistanceStart = _touchZoomDistanceEnd;
          _eye.multiplyScalar( factor );

        } else {

          factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;

          if ( factor !== 1.0 && factor > 0.0 ) {

            _eye.multiplyScalar( factor );

          }

          if ( _this.staticMoving ) {

            _zoomStart.copy( _zoomEnd );

          } else {

            _zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

          }

        }

      };

      this.panCamera = ( function() {

        var mouseChange = new THREE.Vector2(),
          objectUp = new THREE.Vector3(),
          pan = new THREE.Vector3();

        return function panCamera() {

          mouseChange.copy( _panEnd ).sub( _panStart );

          if ( mouseChange.lengthSq() ) {

            mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );

            pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
            pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );

            _this.object.position.add( pan );
            _this.target.add( pan );

            if ( _this.staticMoving ) {

              _panStart.copy( _panEnd );

            } else {

              _panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );

            }

          }

        };

      }() );

      this.checkDistances = function () {

        if ( ! _this.noZoom || ! _this.noPan ) {

          if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {

            _this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );
            _zoomStart.copy( _zoomEnd );

          }

          if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {

            _this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );
            _zoomStart.copy( _zoomEnd );

          }

        }

      };

      this.update = function () {

        _eye.subVectors( _this.object.position, _this.target );

        if ( ! _this.noRotate ) {

          _this.rotateCamera();

        }

        if ( ! _this.noZoom ) {

          _this.zoomCamera();

        }

        if ( ! _this.noPan ) {

          _this.panCamera();

        }

        _this.object.position.addVectors( _this.target, _eye );

        _this.checkDistances();

        _this.object.lookAt( _this.target );

        if ( lastPosition.distanceToSquared( _this.object.position ) > EPS ) {

          _this.dispatchEvent( changeEvent );

          lastPosition.copy( _this.object.position );

        }

      };

      this.reset = function () {

        _state = STATE.NONE;
        _prevState = STATE.NONE;

        _this.target.copy( _this.target0 );
        _this.object.position.copy( _this.position0 );
        _this.object.up.copy( _this.up0 );

        _eye.subVectors( _this.object.position, _this.target );

        _this.object.lookAt( _this.target );

        _this.dispatchEvent( changeEvent );

        lastPosition.copy( _this.object.position );

      };

      // listeners

      function keydown( event ) {

        if ( _this.enabled === false ) return;

        window.removeEventListener( 'keydown', keydown );

        _prevState = _state;

        if ( _state !== STATE.NONE ) {

          return;

        } else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && ! _this.noRotate ) {

          _state = STATE.ROTATE;

        } else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && ! _this.noZoom ) {

          _state = STATE.ZOOM;

        } else if ( event.keyCode === _this.keys[ STATE.PAN ] && ! _this.noPan ) {

          _state = STATE.PAN;

        }

      }

      function keyup( event ) {

        if ( _this.enabled === false ) return;

        _state = _prevState;

        window.addEventListener( 'keydown', keydown, false );

      }

      function mousedown( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        if ( _state === STATE.NONE ) {

          _state = event.button;

        }

        if ( _state === STATE.ROTATE && ! _this.noRotate ) {

          _moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
          _movePrev.copy( _moveCurr );

        } else if ( _state === STATE.ZOOM && ! _this.noZoom ) {

          _zoomStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
          _zoomEnd.copy( _zoomStart );

        } else if ( _state === STATE.PAN && ! _this.noPan ) {

          _panStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
          _panEnd.copy( _panStart );

        }

        document.addEventListener( 'mousemove', mousemove, false );
        document.addEventListener( 'mouseup', mouseup, false );

        _this.dispatchEvent( startEvent );

      }

      function mousemove( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        if ( _state === STATE.ROTATE && ! _this.noRotate ) {

          _movePrev.copy( _moveCurr );
          _moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );

        } else if ( _state === STATE.ZOOM && ! _this.noZoom ) {

          _zoomEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

        } else if ( _state === STATE.PAN && ! _this.noPan ) {

          _panEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

        }

      }

      function mouseup( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        _state = STATE.NONE;

        document.removeEventListener( 'mousemove', mousemove );
        document.removeEventListener( 'mouseup', mouseup );
        _this.dispatchEvent( endEvent );

      }

      function mousewheel( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        switch ( event.deltaMode ) {

                            case 2:
                                    // Zoom in pages
                                    _zoomStart.y -= event.deltaY * 0.025;
                                    break;

          case 1:
                                    // Zoom in lines
            _zoomStart.y -= event.deltaY * 0.01;
            break;

          default:
            // undefined, 0, assume pixels
            _zoomStart.y -= event.deltaY * 0.00025;
            break;

        }

        _this.dispatchEvent( startEvent );
        _this.dispatchEvent( endEvent );

      }

      function touchstart( event ) {

        if ( _this.enabled === false ) return;

        switch ( event.touches.length ) {

          case 1:
            _state = STATE.TOUCH_ROTATE;
            _moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
            _movePrev.copy( _moveCurr );
            break;

          default: // 2 or more
            _state = STATE.TOUCH_ZOOM_PAN;
            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
            _touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );

            var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
            var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
            _panStart.copy( getMouseOnScreen( x, y ) );
            _panEnd.copy( _panStart );
            break;

        }

        _this.dispatchEvent( startEvent );

      }

      function touchmove( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        switch ( event.touches.length ) {

          case 1:
            _movePrev.copy( _moveCurr );
            _moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
            break;

          default: // 2 or more
            var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
            var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
            _touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy );

            var x = ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX ) / 2;
            var y = ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY ) / 2;
            _panEnd.copy( getMouseOnScreen( x, y ) );
            break;

        }

      }

      function touchend( event ) {

        if ( _this.enabled === false ) return;

        switch ( event.touches.length ) {

          case 0:
            _state = STATE.NONE;
            break;

          case 1:
            _state = STATE.TOUCH_ROTATE;
            _moveCurr.copy( getMouseOnCircle( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY ) );
            _movePrev.copy( _moveCurr );
            break;

        }

        _this.dispatchEvent( endEvent );

      }

      function contextmenu( event ) {

        if ( _this.enabled === false ) return;

        event.preventDefault();

      }

      this.dispose = function() {

        this.domElement.removeEventListener( 'contextmenu', contextmenu, false );
        this.domElement.removeEventListener( 'mousedown', mousedown, false );
        this.domElement.removeEventListener( 'wheel', mousewheel, false );

        this.domElement.removeEventListener( 'touchstart', touchstart, false );
        this.domElement.removeEventListener( 'touchend', touchend, false );
        this.domElement.removeEventListener( 'touchmove', touchmove, false );

        document.removeEventListener( 'mousemove', mousemove, false );
        document.removeEventListener( 'mouseup', mouseup, false );

        window.removeEventListener( 'keydown', keydown, false );
        window.removeEventListener( 'keyup', keyup, false );

      };

      this.domElement.addEventListener( 'contextmenu', contextmenu, false );
      this.domElement.addEventListener( 'mousedown', mousedown, false );
      this.domElement.addEventListener( 'wheel', mousewheel, false );

      this.domElement.addEventListener( 'touchstart', touchstart, false );
      this.domElement.addEventListener( 'touchend', touchend, false );
      this.domElement.addEventListener( 'touchmove', touchmove, false );

      window.addEventListener( 'keydown', keydown, false );
      window.addEventListener( 'keyup', keyup, false );

      this.handleResize();

      // force an update at start
      this.update();

    };

    THREE.TrackballControls.prototype = Object.create( THREE.EventDispatcher.prototype );
    THREE.TrackballControls.prototype.constructor = THREE.TrackballControls;



    var table = [
      "JS", "Hydrogen", "1.00794", 1, 1,
      "CSS", "Helium", "4.002602", 2, 2,
      "SCSS", "Helium", "4.002602", 3, 3,
      "HTML", "Lithium", "6.941", 3, 1,
      "jQuery", "Beryllium", "9.012182", 4, 2,
      "Ajax", "Boron", "10.811", 5, 3,
      "Git", "Carbon", "12.0107", 6, 1,
      "Gulp", "Carbon", "12.0107", 7, 2,
      "React", "Carbon", "12.0107", 8, 3,
      "Scrum", "Carbon", "12.0107", 9, 1,
      "OOP", "Carbon", "12.0107", 10, 2,
      "Node", "Carbon", "12.0107", 11, 3
    ];

    var camera, scene, renderer;
    var controls;

    var objects = [];
    var targets = {
      table: [],
      sphere: [],
      helix: [],
      grid: []
    };

    init();
    animate();

    function init() {

      camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 5000;

      scene = new THREE.Scene();

      // table

      for (var i = 0; i < table.length; i += 5) {

        var element = document.createElement('div');
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';

        var number = document.createElement('div');
        number.className = 'number';
        number.textContent = (i / 5) + 1;
        element.appendChild(number);

        var symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i];
        element.appendChild(symbol);

        var details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
        element.appendChild(details);

        var object = new THREE.CSS3DObject(element);
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;
        scene.add(object);

        objects.push(object);

        //

        var object = new THREE.Object3D();
        object.position.x = (table[i + 3] * 270) - 1260;
        object.position.y = -(table[i + 4] * 220) + 990;

        targets.table.push(object);

      }

      // sphere

      var vector = new THREE.Vector3();

      for (var i = 0, l = objects.length; i < l; i++) {

        var phi = Math.acos(-1 + (2 * i) / l);
        var theta = Math.sqrt(l * Math.PI) * phi;

        var object = new THREE.Object3D();

        object.position.x = 800 * Math.cos(theta) * Math.sin(phi);
        object.position.y = 800 * Math.sin(theta) * Math.sin(phi);
        object.position.z = 800 * Math.cos(phi);

        vector.copy(object.position).multiplyScalar(2);

        object.lookAt(vector);

        targets.sphere.push(object);

      }

      // helix

      var vector = new THREE.Vector3();

      for (var i = 0, l = objects.length; i < l; i++) {

        var phi = i * 0.175 + Math.PI;

        var object = new THREE.Object3D();

        object.position.x = 900 * Math.sin(phi);
        object.position.y = -(i * 8) + 450;
        object.position.z = 900 * Math.cos(phi);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;

        object.lookAt(vector);

        targets.helix.push(object);

      }

      // grid

      for (var i = 0; i < objects.length; i++) {

        var object = new THREE.Object3D();

        object.position.x = ((i % 5) * 400) - 800;
        object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        object.position.z = (Math.floor(i / 25)) * 1000 - 2000;

        targets.grid.push(object);

      }

      //

      renderer = new THREE.CSS3DRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.position = 'absolute';
      document.getElementById('container').appendChild(renderer.domElement);

      //

      controls = new THREE.TrackballControls(camera, renderer.domElement);
      controls.rotateSpeed = 0.5;
      controls.minDistance = 500;
      controls.maxDistance = 6000;
      controls.addEventListener('change', render);

      var button = document.getElementById('table');
      button.addEventListener('click', function(event) {

        transform(targets.table, 2000);

      }, false);

      var button = document.getElementById('sphere');
      button.addEventListener('click', function(event) {

        transform(targets.sphere, 2000);

      }, false);

      var button = document.getElementById('helix');
      button.addEventListener('click', function(event) {

        transform(targets.helix, 2000);

      }, false);

      var button = document.getElementById('grid');
      button.addEventListener('click', function(event) {

        transform(targets.grid, 2000);

      }, false);

      transform(targets.table, 2000);

      //

      window.addEventListener('resize', onWindowResize, false);

    }

    function transform(targets, duration) {

      TWEEN.removeAll();

      for (var i = 0; i < objects.length; i++) {

        var object = objects[i];
        var target = targets[i];

        new TWEEN.Tween(object.position)
          .to({
            x: target.position.x,
            y: target.position.y,
            z: target.position.z
          }, Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();

        new TWEEN.Tween(object.rotation)
          .to({
            x: target.rotation.x,
            y: target.rotation.y,
            z: target.rotation.z
          }, Math.random() * duration + duration)
          .easing(TWEEN.Easing.Exponential.InOut)
          .start();

      }

      new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

      render();

    }

    function animate() {

      requestAnimationFrame(animate);

      TWEEN.update();

      controls.update();

    }

    function render() {

      renderer.render(scene, camera);

    }
  }
  render() {
    return (
     <div>
      <div className="skills">
        <div className="skills__container"></div>
        <div id="container" className="skills__menu">
          <button id="table">TABLE</button>
          <button id="sphere">SPHERE</button>
          <button id="helix">HELIX</button>
          <button id="grid">GRID</button>
        </div>
      </div>

      <Script
        url="https://threejs.org/build/three.min.js"
      />
      <Script
        url="https://threejs.org/examples/js/libs/tween.min.js"
      />
      <Script
        url="https://threejs.org/examples/js/controls/TrackballControls.js"
      />
      <Script
        url="https://threejs.org/examples/js/renderers/CSS3DRenderer.js"
      />
    </div>
    )
  }
}

export default Skills
