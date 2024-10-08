! function(root) {
    "use strict";

    function Main(t) {
        Tone = t()
    }

    function Module(t) {
        t(Tone)
    }
    var Tone;
    /**
     *  Tone.js
     *  @author Yotam Mann
     *  @license http://opensource.org/licenses/MIT MIT License
     *  @copyright 2014-2015 Yotam Mann
     */
    Main(function() {
        function t(t) {
            return void 0 === t
        }

        function e(t) {
            return "function" == typeof t
        }
        var i, s, n, o;
        if (t(window.AudioContext) && (window.AudioContext = window.webkitAudioContext), t(window.OfflineAudioContext) && (window.OfflineAudioContext = window.webkitOfflineAudioContext), t(AudioContext)) throw new Error("Web Audio is not supported in this browser");
        return i = new AudioContext, e(AudioContext.prototype.createGain) || (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), e(AudioContext.prototype.createDelay) || (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode), e(AudioContext.prototype.createPeriodicWave) || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable), e(AudioBufferSourceNode.prototype.start) || (AudioBufferSourceNode.prototype.start = AudioBufferSourceNode.prototype.noteGrainOn), e(AudioBufferSourceNode.prototype.stop) || (AudioBufferSourceNode.prototype.stop = AudioBufferSourceNode.prototype.noteOff), e(OscillatorNode.prototype.start) || (OscillatorNode.prototype.start = OscillatorNode.prototype.noteOn), e(OscillatorNode.prototype.stop) || (OscillatorNode.prototype.stop = OscillatorNode.prototype.noteOff), e(OscillatorNode.prototype.setPeriodicWave) || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioNode.prototype._nativeConnect = AudioNode.prototype.connect, AudioNode.prototype.connect = function(e, i, s) {
            if (e.input) Array.isArray(e.input) ? (t(s) && (s = 0), this.connect(e.input[s])) : this.connect(e.input, i, s);
            else try {
                e instanceof AudioNode ? this._nativeConnect(e, i, s) : this._nativeConnect(e, i)
            } catch (n) {
                throw new Error("error connecting to node: " + e)
            }
        }, s = function(e, i) {
            t(e) || 1 === e ? this.input = this.context.createGain() : e > 1 && (this.input = new Array(e)), t(i) || 1 === i ? this.output = this.context.createGain() : i > 1 && (this.output = new Array(e))
        }, s.prototype.set = function(e, i, n) {
            var o, r, l, a, h, u;
            "object" == typeof e ? n = i : "string" == typeof e && (o = {}, o[e] = i, e = o);
            for (r in e) {
                if (i = e[r], l = this, -1 !== r.indexOf(".")) {
                    for (a = r.split("."), h = 0; h < a.length - 1; h++) l = l[a[h]];
                    r = a[a.length - 1]
                }
                u = l[r], t(u) || (u instanceof s.Signal ? u.value !== i && (t(n) ? u.value = i : u.rampTo(i, n)) : u instanceof AudioParam ? u.value !== i && (u.value = i) : u instanceof s ? u.set(i) : u !== i && (l[r] = i))
            }
            return this
        }, s.prototype.get = function(i) {
            var n, o, r, l, a, h, u, c, p;
            for (t(i) ? i = this._collectDefaults(this.constructor) : "string" == typeof i && (i = [i]), n = {}, o = 0; o < i.length; o++) {
                if (r = i[o], l = this, a = n, -1 !== r.indexOf(".")) {
                    for (h = r.split("."), u = 0; u < h.length - 1; u++) c = h[u], a[c] = a[c] || {}, a = a[c], l = l[c];
                    r = h[h.length - 1]
                }
                p = l[r], "object" == typeof i[r] ? a[r] = p.get() : p instanceof s.Signal ? a[r] = p.value : p instanceof AudioParam ? a[r] = p.value : p instanceof s ? a[r] = p.get() : e(p) || t(p) || (a[r] = p)
            }
            return n
        }, s.prototype._collectDefaults = function(e) {
            var i, s, n = [];
            if (t(e.defaults) || (n = Object.keys(e.defaults)), !t(e._super))
                for (i = this._collectDefaults(e._super), s = 0; s < i.length; s++) - 1 === n.indexOf(i[s]) && n.push(i[s]);
            return n
        }, s.prototype.setPreset = function(t) {
            return !this.isUndef(this.preset) && this.preset.hasOwnProperty(t) && this.set(this.preset[t]), this
        }, s.prototype.toString = function() {
            var t, i, n;
            for (t in s)
                if (i = t[0].match(/^[A-Z]$/), n = s[t] === this.constructor, e(s[t]) && i && n) return t;
            return "Tone"
        }, s.context = i, s.prototype.context = s.context, s.prototype.bufferSize = 2048, s.prototype.bufferTime = s.prototype.bufferSize / s.context.sampleRate, s.prototype.dispose = function() {
            return this.isUndef(this.input) || (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), this.isUndef(this.output) || (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this
        }, n = null, s.prototype.noGC = function() {
            return this.output.connect(n), this
        }, AudioNode.prototype.noGC = function() {
            return this.connect(n), this
        }, s.prototype.connect = function(t, e, i) {
            return Array.isArray(this.output) ? (e = this.defaultArg(e, 0), this.output[e].connect(t, 0, i)) : this.output.connect(t, e, i), this
        }, s.prototype.disconnect = function(t) {
            return Array.isArray(this.output) ? (t = this.defaultArg(t, 0), this.output[t].disconnect()) : this.output.disconnect(), this
        }, s.prototype.connectSeries = function() {
            var t, e, i;
            if (arguments.length > 1)
                for (t = arguments[0], e = 1; e < arguments.length; e++) i = arguments[e], t.connect(i), t = i;
            return this
        }, s.prototype.connectParallel = function() {
            var t, e, i = arguments[0];
            if (arguments.length > 1)
                for (t = 1; t < arguments.length; t++) e = arguments[t], i.connect(e);
            return this
        }, s.prototype.chain = function() {
            var t, e, i;
            if (arguments.length > 0)
                for (t = this, e = 0; e < arguments.length; e++) i = arguments[e], t.connect(i), t = i;
            return this
        }, s.prototype.fan = function() {
            if (arguments.length > 0)
                for (var t = 0; t < arguments.length; t++) this.connect(arguments[t]);
            return this
        }, AudioNode.prototype.chain = s.prototype.chain, AudioNode.prototype.fan = s.prototype.fan, s.prototype.defaultArg = function(e, i) {
            var s, n, o;
            if ("object" == typeof e && "object" == typeof i) {
                s = {};
                for (n in e) s[n] = this.defaultArg(e[n], e[n]);
                for (o in i) s[o] = this.defaultArg(e[o], i[o]);
                return s
            }
            return t(e) ? i : e
        }, s.prototype.optionsObject = function(t, e, i) {
            var s, n = {};
            if (1 === t.length && "object" == typeof t[0]) n = t[0];
            else
                for (s = 0; s < e.length; s++) n[e[s]] = t[s];
            return this.isUndef(i) ? n : this.defaultArg(n, i)
        }, s.prototype.isUndef = t, s.prototype.isFunction = e, s.prototype._readOnly = function(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) this._readOnly(t[e]);
            else Object.defineProperty(this, t, {
                writable: !1,
                enumerable: !0
            })
        }, s.prototype._writable = function(t) {
            if (Array.isArray(t))
                for (var e = 0; e < t.length; e++) this._writable(t[e]);
            else Object.defineProperty(this, t, {
                writable: !0
            })
        }, s.prototype.equalPowerScale = function(t) {
            var e = .5 * Math.PI;
            return Math.sin(t * e)
        }, s.prototype.dbToGain = function(t) {
            return Math.pow(2, t / 6)
        }, s.prototype.gainToDb = function(t) {
            return 20 * (Math.log(t) / Math.LN10)
        }, s.prototype.now = function() {
            return this.context.currentTime
        }, s.prototype.samplesToSeconds = function(t) {
            return t / this.context.sampleRate
        }, s.prototype.toSamples = function(t) {
            var e = this.toSeconds(t);
            return Math.round(e * this.context.sampleRate)
        }, s.prototype.toSeconds = function(t, e) {
            if (e = this.defaultArg(e, this.now()), "number" == typeof t) return t;
            if ("string" == typeof t) {
                var i = 0;
                return "+" === t.charAt(0) && (t = t.slice(1), i = e), parseFloat(t) + i
            }
            return e
        }, s.prototype.isFrequency = function() {
            var t = new RegExp(/\d*\.?\d+hz$/i);
            return function(e) {
                return t.test(e)
            }
        }(), s.prototype.frequencyToSeconds = function(t) {
            return 1 / parseFloat(t)
        }, s.prototype.secondsToFrequency = function(t) {
            return 1 / t
        }, s.extend = function(e, i) {
            function n() {}
            t(i) && (i = s), n.prototype = i.prototype, e.prototype = new n, e.prototype.constructor = e, e._super = i
        }, s.Type = {
            Default: "number",
            Time: "time",
            Frequency: "frequency",
            Gain: "gain",
            NormalRange: "normalrange",
            AudioRange: "audiorange",
            Decibels: "db",
            Interval: "interval",
            BPM: "bpm",
            Positive: "positive",
            Cents: "cents",
            Degrees: "degrees",
            MIDI: "midi",
            TransportTime: "transporttime"
        }, s.State = {
            Started: "started",
            Stopped: "stopped",
            Paused: "paused"
        }, s.noOp = function() {}, o = [], s._initAudioContext = function(t) {
            t(s.context), o.push(t)
        }, s.setContext = function(t) {
            s.prototype.context = t, s.context = t;
            for (var e = 0; e < o.length; e++) o[e](t)
        }, s.startMobile = function() {
            var t, e = s.context.createOscillator(),
                i = s.context.createGain();
            i.gain.value = 0, e.connect(i), i.connect(s.context.destination), t = s.context.currentTime, e.start(t), e.stop(t + 1)
        }, s._initAudioContext(function(t) {
            s.prototype.bufferTime = s.prototype.bufferSize / t.sampleRate, n = t.createGain(), n.gain.value = 0, n.connect(t.destination)
        }), s.version = "r5", console.log("%c * Tone.js " + s.version + " * ", "background: #000; color: #fff"), s
    }), Module(function(t) {
        return t.SignalBase = function() {}, t.extend(t.SignalBase), t.SignalBase.prototype.connect = function(e, i, s) {
            return e.constructor === t.Signal ? (e._value.cancelScheduledValues(0), e._value.value = 0, e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0), e.value = 0), t.prototype.connect.call(this, e, i, s), this
        }, t.SignalBase
    }), Module(function(t) {
        return t.WaveShaper = function(t, e) {
            this._shaper = this.input = this.output = this.context.createWaveShaper(), this._curve = null, Array.isArray(t) ? this.curve = t : isFinite(t) || this.isUndef(t) ? this._curve = new Float32Array(this.defaultArg(t, 1024)) : this.isFunction(t) && (this._curve = new Float32Array(this.defaultArg(e, 1024)), this.setMap(t))
        }, t.extend(t.WaveShaper, t.SignalBase), t.WaveShaper.prototype.setMap = function(t) {
            var e, i, s;
            for (e = 0, i = this._curve.length; i > e; e++) s = e / i * 2 - 1, this._curve[e] = t(s, e);
            return this._shaper.curve = this._curve, this
        }, Object.defineProperty(t.WaveShaper.prototype, "curve", {
            get: function() {
                return this._shaper.curve
            },
            set: function(t) {
                if (this._isSafari()) {
                    var e = t[0];
                    t.unshift(e)
                }
                this._curve = new Float32Array(t), this._shaper.curve = this._curve
            }
        }), Object.defineProperty(t.WaveShaper.prototype, "oversample", {
            get: function() {
                return this._shaper.oversample
            },
            set: function(t) {
                this._shaper.oversample = t
            }
        }), t.WaveShaper.prototype._isSafari = function() {
            var t = navigator.userAgent.toLowerCase();
            return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome")
        }, t.WaveShaper.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this
        }, t.WaveShaper
    }), Module(function(t) {
        return t.Signal = function() {
            var e = this.optionsObject(arguments, ["value", "units"], t.Signal.defaults);
            this.units = e.units, this.convert = e.convert, this.overridden = !1, this.output = this._scaler = this.context.createGain(), this.input = this._value = this._scaler.gain, e.value instanceof AudioParam ? (this._scaler.connect(e.value), e.value.value = 0) : (this.isUndef(e.param) || (this._scaler.connect(e.param), e.param.value = 0), this.value = e.value), t.Signal._constant.chain(this._scaler)
        }, t.extend(t.Signal, t.SignalBase), t.Signal.defaults = {
            value: 0,
            param: void 0,
            units: t.Type.Default,
            convert: !0
        }, Object.defineProperty(t.Signal.prototype, "value", {
            get: function() {
                return this._toUnits(this._value.value)
            },
            set: function(t) {
                var e = this._fromUnits(t);
                this.cancelScheduledValues(0), this._value.value = e
            }
        }), t.Signal.prototype._fromUnits = function(e) {
            if (!this.convert && !this.isUndef(this.convert)) return e;
            switch (this.units) {
                case t.Type.Time:
                    return this.toSeconds(e);
                case t.Type.Frequency:
                    return this.toFrequency(e);
                case t.Type.Decibels:
                    return this.dbToGain(e);
                case t.Type.NormalRange:
                    return Math.min(Math.max(e, 0), 1);
                case t.Type.AudioRange:
                    return Math.min(Math.max(e, -1), 1);
                case t.Type.Positive:
                    return Math.max(e, 0);
                default:
                    return e
            }
        }, t.Signal.prototype._toUnits = function(e) {
            if (!this.convert && !this.isUndef(this.convert)) return e;
            switch (this.units) {
                case t.Type.Decibels:
                    return this.gainToDb(e);
                default:
                    return e
            }
        }, t.Signal.prototype.setValueAtTime = function(t, e) {
            return t = this._fromUnits(t), this._value.setValueAtTime(t, this.toSeconds(e)), this
        }, t.Signal.prototype.setCurrentValueNow = function(t) {
            t = this.defaultArg(t, this.now());
            var e = this._value.value;
            return this.cancelScheduledValues(t), this._value.setValueAtTime(e, t), this
        }, t.Signal.prototype.linearRampToValueAtTime = function(t, e) {
            return t = this._fromUnits(t), this._value.linearRampToValueAtTime(t, this.toSeconds(e)), this
        }, t.Signal.prototype.exponentialRampToValueAtTime = function(t, e) {
            return t = this._fromUnits(t), t = Math.max(1e-5, t), this._value.exponentialRampToValueAtTime(t, this.toSeconds(e)), this
        }, t.Signal.prototype.exponentialRampToValueNow = function(t, e) {
            var i = this.now(),
                s = this.value;
            return this.setValueAtTime(Math.max(s, 1e-4), i), this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)), this
        }, t.Signal.prototype.linearRampToValueNow = function(t, e) {
            var i = this.now();
            return this.setCurrentValueNow(i), this.linearRampToValueAtTime(t, i + this.toSeconds(e)), this
        }, t.Signal.prototype.setTargetAtTime = function(t, e, i) {
            return t = this._fromUnits(t), i = Math.max(1e-5, i), this._value.setTargetAtTime(t, this.toSeconds(e), i), this
        }, t.Signal.prototype.setValueCurveAtTime = function(t, e, i) {
            for (var s = 0; s < t.length; s++) t[s] = this._fromUnits(t[s]);
            return this._value.setValueCurveAtTime(t, this.toSeconds(e), this.toSeconds(i)), this
        }, t.Signal.prototype.cancelScheduledValues = function(t) {
            return this._value.cancelScheduledValues(this.toSeconds(t)), this
        }, t.Signal.prototype.rampTo = function(e, i) {
            return i = this.defaultArg(i, 0), this.units === t.Type.Frequency || this.units === t.Type.BPM ? this.exponentialRampToValueNow(e, i) : this.linearRampToValueNow(e, i), this
        }, t.Signal.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._value = null, this._scaler = null, this
        }, t.Signal._generator = null, t.Signal._constant = null, t._initAudioContext(function(e) {
            t.Signal._generator = e.createOscillator(), t.Signal._constant = new t.WaveShaper([1, 1]), t.Signal._generator.connect(t.Signal._constant), t.Signal._generator.start(0), t.Signal._generator.noGC()
        }), t.Signal
    }), Module(function(t) {
        return t.Pow = function(e) {
            this._exp = this.defaultArg(e, 1), this._expScaler = this.input = this.output = new t.WaveShaper(this._expFunc(this._exp), 8192)
        }, t.extend(t.Pow, t.SignalBase), Object.defineProperty(t.Pow.prototype, "value", {
            get: function() {
                return this._exp
            },
            set: function(t) {
                this._exp = t, this._expScaler.setMap(this._expFunc(this._exp))
            }
        }), t.Pow.prototype._expFunc = function(t) {
            return function(e) {
                return Math.pow(Math.abs(e), t)
            }
        }, t.Pow.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._expScaler.dispose(), this._expScaler = null, this
        }, t.Pow
    }), Module(function(t) {
        return t.Envelope = function() {
            var e = this.optionsObject(arguments, ["attack", "decay", "sustain", "release"], t.Envelope.defaults);
            this.attack = e.attack, this.decay = e.decay, this.sustain = e.sustain, this.release = e.release, this._nextAttack = 1 / 0, this._nextDecay = 1 / 0, this._nextSustain = 1 / 0, this._nextRelease = 1 / 0, this._nextStandby = 1 / 0, this._attackCurve = t.Envelope.Type.Linear, this._peakValue = 1, this._minOutput = 1e-4, this._sig = this.output = new t.Signal(0), this.attackCurve = e.attackCurve
        }, t.extend(t.Envelope), t.Envelope.defaults = {
            attack: .01,
            decay: .1,
            sustain: .5,
            release: 1,
            attackCurve: "linear"
        }, t.Envelope.prototype._timeMult = .25, Object.defineProperty(t.Envelope.prototype, "value", {
            get: function() {
                return this._sig.value
            }
        }), Object.defineProperty(t.Envelope.prototype, "attackCurve", {
            get: function() {
                return this._attackCurve
            },
            set: function(e) {
                if (e !== t.Envelope.Type.Linear && e !== t.Envelope.Type.Exponential) throw Error('attackCurve must be either "linear" or "exponential". Invalid type: ', e);
                this._attackCurve = e
            }
        }), t.Envelope.prototype._phaseAtTime = function(e) {
            return this._nextRelease > e ? this._nextAttack <= e && this._nextDecay > e ? t.Envelope.Phase.Attack : this._nextDecay <= e && this._nextSustain > e ? t.Envelope.Phase.Decay : this._nextSustain <= e && this._nextRelease > e ? t.Envelope.Phase.Sustain : t.Envelope.Phase.Standby : this._nextRelease < e && this._nextStandby > e ? t.Envelope.Phase.Release : t.Envelope.Phase.Standby
        }, t.Envelope.prototype._exponentialApproach = function(t, e, i, s, n) {
            return i + (e - i) * Math.exp(-(n - t) / s)
        }, t.Envelope.prototype._linearInterpolate = function(t, e, i, s, n) {
            return e + (s - e) * ((n - t) / (i - t))
        }, t.Envelope.prototype._exponentialInterpolate = function(t, e, i, s, n) {
            return e * Math.pow(s / e, (n - t) / (i - t))
        }, t.Envelope.prototype._valueAtTime = function(e) {
            var i = this.toSeconds(this.attack),
                s = this.toSeconds(this.decay),
                n = this.toSeconds(this.release);
            switch (this._phaseAtTime(e)) {
                case t.Envelope.Phase.Attack:
                    return this._attackCurve === t.Envelope.Type.Linear ? this._linearInterpolate(this._nextAttack, this._minOutput, this._nextAttack + i, this._peakValue, e) : this._exponentialInterpolate(this._nextAttack, this._minOutput, this._nextAttack + i, this._peakValue, e);
                case t.Envelope.Phase.Decay:
                    return this._exponentialApproach(this._nextDecay, this._peakValue, this.sustain * this._peakValue, s * this._timeMult, e);
                case t.Envelope.Phase.Release:
                    return this._exponentialApproach(this._nextRelease, this._peakValue, this._minOutput, n * this._timeMult, e);
                case t.Envelope.Phase.Sustain:
                    return this.sustain * this._peakValue;
                case t.Envelope.Phase.Standby:
                    return this._minOutput
            }
        }, t.Envelope.prototype.triggerAttack = function(e, i) {
            var s, n, o, r, l, a;
            return e = this.toSeconds(e), s = this.toSeconds(this.attack), n = this.toSeconds(this.decay), o = this._valueAtTime(e), r = o * s, this._nextAttack = e - r, this._nextDecay = this._nextAttack + s, this._nextSustain = this._nextDecay + n, this._nextRelease = 1 / 0, this._peakValue = this.defaultArg(i, 1), l = this._peakValue, a = this.sustain * l, this._sig.cancelScheduledValues(e), this._sig.setValueAtTime(o, e), this._attackCurve === t.Envelope.Type.Linear ? this._sig.linearRampToValueAtTime(l, this._nextDecay) : this._sig.exponentialRampToValueAtTime(l, this._nextDecay), this._sig.setTargetAtTime(a, this._nextDecay, n * this._timeMult), this
        }, t.Envelope.prototype.triggerRelease = function(e) {
            var i, s, n;
            return e = this.toSeconds(e), i = this._phaseAtTime(e), s = this.toSeconds(this.release), n = this._valueAtTime(e), this._peakValue = n, this._nextRelease = e, this._nextStandby = this._nextRelease + s, this._sig.cancelScheduledValues(this._nextRelease), i === t.Envelope.Phase.Attack ? (this._sig.setCurrentValueNow(), this.attackCurve === t.Envelope.Type.Linear ? this._sig.linearRampToValueAtTime(this._peakValue, this._nextRelease) : this._sig.exponentialRampToValueAtTime(this._peakValue, this._nextRelease)) : this._sig.setValueAtTime(this._peakValue, this._nextRelease), this._sig.setTargetAtTime(this._minOutput, this._nextRelease, s * this._timeMult), this
        }, t.Envelope.prototype.triggerAttackRelease = function(t, e, i) {
            return e = this.toSeconds(e), this.triggerAttack(e, i), this.triggerRelease(e + this.toSeconds(t)), this
        }, t.Envelope.prototype.connect = t.Signal.prototype.connect, t.Envelope.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._sig.dispose(), this._sig = null, this
        }, t.Envelope.Phase = {
            Attack: "attack",
            Decay: "decay",
            Sustain: "sustain",
            Release: "release",
            Standby: "standby"
        }, t.Envelope.Type = {
            Linear: "linear",
            Exponential: "exponential"
        }, t.Envelope
    }), Module(function(t) {
        return t.AmplitudeEnvelope = function() {
            t.Envelope.apply(this, arguments), this.input = this.output = this.context.createGain(), this._sig.connect(this.output.gain)
        }, t.extend(t.AmplitudeEnvelope, t.Envelope), t.AmplitudeEnvelope
    }), Module(function(t) {
        return t.Compressor = function() {
            var e = this.optionsObject(arguments, ["threshold", "ratio"], t.Compressor.defaults);
            this._compressor = this.input = this.output = this.context.createDynamicsCompressor(), this.threshold = this._compressor.threshold, this.attack = new t.Signal(this._compressor.attack, t.Type.Time), this.release = new t.Signal(this._compressor.release, t.Type.Time), this.knee = this._compressor.knee, this.ratio = this._compressor.ratio, this._readOnly(["knee", "release", "attack", "ratio", "threshold"]), this.set(e)
        }, t.extend(t.Compressor), t.Compressor.defaults = {
            ratio: 12,
            threshold: -24,
            release: .25,
            attack: .003,
            knee: 30
        }, t.Compressor.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["knee", "release", "attack", "ratio", "threshold"]), this._compressor.disconnect(), this._compressor = null, this.attack.dispose(), this.attack = null, this.release.dispose(), this.release = null, this.threshold = null, this.ratio = null, this.knee = null, this
        }, t.Compressor
    }), Module(function(t) {
        return t.Add = function(e) {
            t.call(this, 2, 0), this._sum = this.input[0] = this.input[1] = this.output = this.context.createGain(), this._value = this.input[1] = new t.Signal(e), this._value.connect(this._sum)
        }, t.extend(t.Add, t.Signal), t.Add.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._sum.disconnect(), this._sum = null, this._value.dispose(), this._value = null, this
        }, t.Add
    }), Module(function(t) {
        return t.Multiply = function(e) {
            t.call(this, 2, 0), this._mult = this.input[0] = this.output = this.context.createGain(), this._value = this.input[1] = this.output.gain, this._value.value = this.defaultArg(e, 0)
        }, t.extend(t.Multiply, t.Signal), t.Multiply.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._mult.disconnect(), this._mult = null, this._value = null, this
        }, t.Multiply
    }), Module(function(t) {
        return t.Negate = function() {
            this._multiply = this.input = this.output = new t.Multiply(-1)
        }, t.extend(t.Negate, t.SignalBase), t.Negate.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._multiply.dispose(), this._multiply = null, this
        }, t.Negate
    }), Module(function(t) {
        return t.Subtract = function(e) {
            t.call(this, 2, 0), this._sum = this.input[0] = this.output = this.context.createGain(), this._neg = new t.Negate, this._value = this.input[1] = new t.Signal(e), this._value.chain(this._neg, this._sum)
        }, t.extend(t.Subtract, t.Signal), t.Subtract.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._sum.disconnect(), this._sum = null, this._value.dispose(), this._value = null, this
        }, t.Subtract
    }), Module(function(t) {
        return t.GreaterThanZero = function() {
            this._thresh = this.output = new t.WaveShaper(function(t) {
                return 0 >= t ? 0 : 1
            }), this._scale = this.input = new t.Multiply(1e4), this._scale.connect(this._thresh)
        }, t.extend(t.GreaterThanZero, t.SignalBase), t.GreaterThanZero.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this
        }, t.GreaterThanZero
    }), Module(function(t) {
        return t.EqualZero = function() {
            this._scale = this.input = new t.Multiply(1e4), this._thresh = new t.WaveShaper(function(t) {
                return 0 === t ? 1 : 0
            }, 128), this._gtz = this.output = new t.GreaterThanZero, this._scale.chain(this._thresh, this._gtz)
        }, t.extend(t.EqualZero, t.SignalBase), t.EqualZero.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._gtz.dispose(), this._gtz = null, this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this
        }, t.EqualZero
    }), Module(function(t) {
        return t.Equal = function(e) {
            t.call(this, 2, 0), this._sub = this.input[0] = new t.Subtract(e), this._equals = this.output = new t.EqualZero, this._sub.connect(this._equals), this.input[1] = this._sub.input[1]
        }, t.extend(t.Equal, t.SignalBase), Object.defineProperty(t.Equal.prototype, "value", {
            get: function() {
                return this._sub.value
            },
            set: function(t) {
                this._sub.value = t
            }
        }), t.Equal.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._equals.dispose(), this._equals = null, this._sub.dispose(), this._sub = null, this
        }, t.Equal
    }), Module(function(t) {
        t.Select = function(i) {
            var s, n;
            for (i = this.defaultArg(i, 2), t.call(this, i, 1), this.gate = new t.Signal(0), this._readOnly("gate"), s = 0; i > s; s++) n = new e(s), this.input[s] = n, this.gate.connect(n.selecter), n.connect(this.output)
        }, t.extend(t.Select, t.SignalBase), t.Select.prototype.select = function(t, e) {
            return t = Math.floor(t), this.gate.setValueAtTime(t, this.toSeconds(e)), this
        }, t.Select.prototype.dispose = function() {
            this._writable("gate"), this.gate.dispose(), this.gate = null;
            for (var e = 0; e < this.input.length; e++) this.input[e].dispose(), this.input[e] = null;
            return t.prototype.dispose.call(this), this
        };
        var e = function(e) {
            this.selecter = new t.Equal(e), this.gate = this.input = this.output = this.context.createGain(), this.selecter.connect(this.gate.gain)
        };
        return t.extend(e), e.prototype.dispose = function() {
            t.prototype.dispose.call(this), this.selecter.dispose(), this.gate.disconnect(), this.selecter = null, this.gate = null
        }, t.Select
    }), Module(function(t) {
        return t.IfThenElse = function() {
            t.call(this, 3, 0), this._selector = this.output = new t.Select(2), this["if"] = this.input[0] = this._selector.gate, this.then = this.input[1] = this._selector.input[1], this["else"] = this.input[2] = this._selector.input[0]
        }, t.extend(t.IfThenElse, t.SignalBase), t.IfThenElse.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._selector.dispose(), this._selector = null, this["if"] = null, this.then = null, this["else"] = null, this
        }, t.IfThenElse
    }), Module(function(t) {
        return t.OR = function(e) {
            e = this.defaultArg(e, 2), t.call(this, e, 0), this._sum = this.context.createGain(), this._gtz = this.output = new t.GreaterThanZero;
            for (var i = 0; e > i; i++) this.input[i] = this._sum;
            this._sum.connect(this._gtz)
        }, t.extend(t.OR, t.SignalBase), t.OR.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._gtz.dispose(), this._gtz = null, this._sum.disconnect(), this._sum = null, this
        }, t.OR
    }), Module(function(t) {
        return t.AND = function(e) {
            e = this.defaultArg(e, 2), t.call(this, e, 0), this._equals = this.output = new t.Equal(e);
            for (var i = 0; e > i; i++) this.input[i] = this._equals
        }, t.extend(t.AND, t.SignalBase), t.AND.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._equals.dispose(), this._equals = null, this
        }, t.AND
    }), Module(function(t) {
        return t.NOT = t.EqualZero, t.NOT
    }), Module(function(t) {
        return t.GreaterThan = function(e) {
            t.call(this, 2, 0), this._value = this.input[0] = new t.Subtract(e), this.input[1] = this._value.input[1], this._gtz = this.output = new t.GreaterThanZero, this._value.connect(this._gtz)
        }, t.extend(t.GreaterThan, t.Signal), t.GreaterThan.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._value.dispose(), this._value = null, this._gtz.dispose(), this._gtz = null, this
        }, t.GreaterThan
    }), Module(function(t) {
        return t.LessThan = function(e) {
            t.call(this, 2, 0), this._neg = this.input[0] = new t.Negate, this._gt = this.output = new t.GreaterThan, this._rhNeg = new t.Negate, this._value = this.input[1] = new t.Signal(e), this._neg.connect(this._gt), this._value.connect(this._rhNeg), this._rhNeg.connect(this._gt, 0, 1)
        }, t.extend(t.LessThan, t.Signal), t.LessThan.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._gt.dispose(), this._gt = null, this._rhNeg.dispose(), this._rhNeg = null, this._value.dispose(), this._value = null, this
        }, t.LessThan
    }), Module(function(t) {
        return t.Abs = function() {
            t.call(this, 1, 0), this._ltz = new t.LessThan(0), this._switch = this.output = new t.Select(2), this._negate = new t.Negate, this.input.connect(this._switch, 0, 0), this.input.connect(this._negate), this._negate.connect(this._switch, 0, 1), this.input.chain(this._ltz, this._switch.gate)
        }, t.extend(t.Abs, t.SignalBase), t.Abs.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._switch.dispose(), this._switch = null, this._ltz.dispose(), this._ltz = null, this._negate.dispose(), this._negate = null, this
        }, t.Abs
    }), Module(function(t) {
        return t.Max = function(e) {
            t.call(this, 2, 0), this.input[0] = this.context.createGain(), this._value = this.input[1] = new t.Signal(e), this._ifThenElse = this.output = new t.IfThenElse, this._gt = new t.GreaterThan, this.input[0].chain(this._gt, this._ifThenElse["if"]), this.input[0].connect(this._ifThenElse.then), this._value.connect(this._ifThenElse["else"]), this._value.connect(this._gt, 0, 1)
        }, t.extend(t.Max, t.Signal), t.Max.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._value.dispose(), this._ifThenElse.dispose(), this._gt.dispose(), this._value = null, this._ifThenElse = null, this._gt = null, this
        }, t.Max
    }), Module(function(t) {
        return t.Min = function(e) {
            t.call(this, 2, 0), this.input[0] = this.context.createGain(), this._ifThenElse = this.output = new t.IfThenElse, this._lt = new t.LessThan, this._value = this.input[1] = new t.Signal(e), this.input[0].chain(this._lt, this._ifThenElse["if"]), this.input[0].connect(this._ifThenElse.then), this._value.connect(this._ifThenElse["else"]), this._value.connect(this._lt, 0, 1)
        }, t.extend(t.Min, t.Signal), t.Min.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._value.dispose(), this._ifThenElse.dispose(), this._lt.dispose(), this._value = null, this._ifThenElse = null, this._lt = null, this
        }, t.Min
    }), Module(function(t) {
        return t.Modulo = function(e) {
            t.call(this, 1, 1), this._shaper = new t.WaveShaper(Math.pow(2, 16)), this._multiply = new t.Multiply, this._subtract = this.output = new t.Subtract, this._modSignal = new t.Signal(e), this.input.fan(this._shaper, this._subtract), this._modSignal.connect(this._multiply, 0, 0), this._shaper.connect(this._multiply, 0, 1), this._multiply.connect(this._subtract, 0, 1), this._setWaveShaper(e)
        }, t.extend(t.Modulo, t.SignalBase), t.Modulo.prototype._setWaveShaper = function(t) {
            this._shaper.setMap(function(e) {
                var i = Math.floor((e + 1e-4) / t);
                return i
            })
        }, Object.defineProperty(t.Modulo.prototype, "value", {
            get: function() {
                return this._modSignal.value
            },
            set: function(t) {
                this._modSignal.value = t, this._setWaveShaper(t)
            }
        }), t.Modulo.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this._multiply.dispose(), this._multiply = null, this._subtract.dispose(), this._subtract = null, this._modSignal.dispose(), this._modSignal = null, this
        }, t.Modulo
    }), Module(function(t) {
        function e(t, e, i) {
            var s = new t;
            return i._eval(e[0]).connect(s, 0, 0), i._eval(e[1]).connect(s, 0, 1), s
        }

        function i(t, e, i) {
            var s = new t;
            return i._eval(e[0]).connect(s, 0, 0), s
        }

        function s(t) {
            return t ? parseFloat(t) : void 0
        }

        function n(t) {
            return t && t.args ? parseFloat(t.args) : void 0
        }
        return t.Expr = function() {
            var t, e, i, s = this._replacements(Array.prototype.slice.call(arguments)),
                n = this._parseInputs(s);
            for (this._nodes = [], this.input = new Array(n), t = 0; n > t; t++) this.input[t] = this.context.createGain();
            e = this._parseTree(s);
            try {
                i = this._eval(e)
            } catch (o) {
                throw this._disposeNodes(), new Error("Could evaluate expression: " + s)
            }
            this.output = i
        }, t.extend(t.Expr, t.SignalBase), t.Expr._Expressions = {
            value: {
                signal: {
                    regexp: /^\d+\.\d+|^\d+/,
                    method: function(e) {
                        var i = new t.Signal(s(e));
                        return i
                    }
                },
                input: {
                    regexp: /^\$\d/,
                    method: function(t, e) {
                        return e.input[s(t.substr(1))]
                    }
                }
            },
            glue: {
                "(": {
                    regexp: /^\(/
                },
                ")": {
                    regexp: /^\)/
                },
                ",": {
                    regexp: /^,/
                }
            },
            func: {
                abs: {
                    regexp: /^abs/,
                    method: i.bind(this, t.Abs)
                },
                min: {
                    regexp: /^min/,
                    method: e.bind(this, t.Min)
                },
                max: {
                    regexp: /^max/,
                    method: e.bind(this, t.Max)
                },
                "if": {
                    regexp: /^if/,
                    method: function(e, i) {
                        var s = new t.IfThenElse;
                        return i._eval(e[0]).connect(s["if"]), i._eval(e[1]).connect(s.then), i._eval(e[2]).connect(s["else"]), s
                    }
                },
                gt0: {
                    regexp: /^gt0/,
                    method: i.bind(this, t.GreaterThanZero)
                },
                eq0: {
                    regexp: /^eq0/,
                    method: i.bind(this, t.EqualZero)
                },
                mod: {
                    regexp: /^mod/,
                    method: function(e, i) {
                        var s = n(e[1]),
                            o = new t.Modulo(s);
                        return i._eval(e[0]).connect(o), o
                    }
                },
                pow: {
                    regexp: /^pow/,
                    method: function(e, i) {
                        var s = n(e[1]),
                            o = new t.Pow(s);
                        return i._eval(e[0]).connect(o), o
                    }
                }
            },
            binary: {
                "+": {
                    regexp: /^\+/,
                    precedence: 1,
                    method: e.bind(this, t.Add)
                },
                "-": {
                    regexp: /^\-/,
                    precedence: 1,
                    method: function(s, n) {
                        return 1 === s.length ? i(t.Negate, s, n) : e(t.Subtract, s, n)
                    }
                },
                "*": {
                    regexp: /^\*/,
                    precedence: 0,
                    method: e.bind(this, t.Multiply)
                },
                ">": {
                    regexp: /^\>/,
                    precedence: 2,
                    method: e.bind(this, t.GreaterThan)
                },
                "<": {
                    regexp: /^</,
                    precedence: 2,
                    method: e.bind(this, t.LessThan)
                },
                "==": {
                    regexp: /^==/,
                    precedence: 3,
                    method: e.bind(this, t.Equal)
                },
                "&&": {
                    regexp: /^&&/,
                    precedence: 4,
                    method: e.bind(this, t.AND)
                },
                "||": {
                    regexp: /^\|\|/,
                    precedence: 5,
                    method: e.bind(this, t.OR)
                }
            },
            unary: {
                "-": {
                    regexp: /^\-/,
                    method: i.bind(this, t.Negate)
                },
                "!": {
                    regexp: /^\!/,
                    method: i.bind(this, t.NOT)
                }
            }
        }, t.Expr.prototype._parseInputs = function(t) {
            var e, i, s = t.match(/\$\d/g),
                n = 0;
            if (null !== s)
                for (e = 0; e < s.length; e++) i = parseInt(s[e].substr(1)) + 1, n = Math.max(n, i);
            return n
        }, t.Expr.prototype._replacements = function(t) {
            var e, i = t.shift();
            for (e = 0; e < t.length; e++) i = i.replace(/\%/i, t[e]);
            return i
        }, t.Expr.prototype._tokenize = function(e) {
            function i(e) {
                var i, s, n, o, r, l;
                for (i in t.Expr._Expressions) {
                    s = t.Expr._Expressions[i];
                    for (n in s)
                        if (o = s[n], r = o.regexp, l = e.match(r), null !== l) return {
                            type: i,
                            value: l[0],
                            method: o.method
                        }
                }
                throw new SyntaxError("Unexpected token " + e)
            }
            for (var s, n = -1, o = []; e.length > 0;) e = e.trim(), s = i(e), o.push(s), e = e.substr(s.value.length);
            return {
                next: function() {
                    return o[++n]
                },
                peek: function() {
                    return o[n + 1]
                }
            }
        }, t.Expr.prototype._parseTree = function(e) {
            function i(t, e) {
                return !u(t) && "glue" === t.type && t.value === e
            }

            function s(e, i, s) {
                var n, o, r = !1,
                    l = t.Expr._Expressions[i];
                if (!u(e))
                    for (n in l)
                        if (o = l[n], o.regexp.test(e.value)) {
                            if (u(s)) return !0;
                            if (o.precedence === s) return !0
                        }
                return r
            }

            function n(t) {
                var e, i;
                for (u(t) && (t = 5), e = 0 > t ? o() : n(t - 1), i = h.peek(); s(i, "binary", t);) i = h.next(), e = {
                    operator: i.value,
                    method: i.method,
                    args: [e, n(t)]
                }, i = h.peek();
                return e
            }

            function o() {
                var t, e;
                return t = h.peek(), s(t, "unary") ? (t = h.next(), e = o(), {
                    operator: t.value,
                    method: t.method,
                    args: [e]
                }) : r()
            }

            function r() {
                var t, e;
                if (t = h.peek(), u(t)) throw new SyntaxError("Unexpected termination of expression");
                if ("func" === t.type) return t = h.next(), l(t);
                if ("value" === t.type) return t = h.next(), {
                    method: t.method,
                    args: t.value
                };
                if (i(t, "(")) {
                    if (h.next(), e = n(), t = h.next(), !i(t, ")")) throw new SyntaxError("Expected )");
                    return e
                }
                throw new SyntaxError("Parse error, cannot process token " + t.value)
            }

            function l(t) {
                var e, s = [];
                if (e = h.next(), !i(e, "(")) throw new SyntaxError('Expected ( in a function call "' + t.value + '"');
                if (e = h.peek(), i(e, ")") || (s = a()), e = h.next(), !i(e, ")")) throw new SyntaxError('Expected ) in a function call "' + t.value + '"');
                return {
                    method: t.method,
                    args: s,
                    name: name
                }
            }

            function a() {
                for (var t, e, s = [];;) {
                    if (e = n(), u(e)) break;
                    if (s.push(e), t = h.peek(), !i(t, ",")) break;
                    h.next()
                }
                return s
            }
            var h = this._tokenize(e),
                u = this.isUndef.bind(this);
            return n()
        }, t.Expr.prototype._eval = function(t) {
            if (!this.isUndef(t)) {
                var e = t.method(t.args, this);
                return this._nodes.push(e), e
            }
        }, t.Expr.prototype._disposeNodes = function() {
            var t, e;
            for (t = 0; t < this._nodes.length; t++) e = this._nodes[t], this.isFunction(e.dispose) ? e.dispose() : this.isFunction(e.disconnect) && e.disconnect(), e = null, this._nodes[t] = null;
            this._nodes = null
        }, t.Expr.prototype.dispose = function() {
            t.prototype.dispose.call(this), this._disposeNodes()
        }, t.Expr
    }), Module(function(t) {
        return t.EqualPowerGain = function() {
            this._eqPower = this.input = this.output = new t.WaveShaper(function(t) {
                return Math.abs(t) < .001 ? 0 : this.equalPowerScale(t)
            }.bind(this), 4096)
        }, t.extend(t.EqualPowerGain, t.SignalBase), t.EqualPowerGain.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._eqPower.dispose(), this._eqPower = null, this
        }, t.EqualPowerGain
    }), Module(function(t) {
        return t.CrossFade = function(e) {
            t.call(this, 2, 1), this.a = this.input[0] = this.context.createGain(), this.b = this.input[1] = this.context.createGain(), this.fade = new t.Signal(this.defaultArg(e, .5), t.Type.NormalRange), this._equalPowerA = new t.EqualPowerGain, this._equalPowerB = new t.EqualPowerGain, this._invert = new t.Expr("1 - $0"), this.a.connect(this.output), this.b.connect(this.output), this.fade.chain(this._equalPowerB, this.b.gain), this.fade.chain(this._invert, this._equalPowerA, this.a.gain), this._readOnly("fade")
        }, t.extend(t.CrossFade), t.CrossFade.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable("fade"), this._equalPowerA.dispose(), this._equalPowerA = null, this._equalPowerB.dispose(), this._equalPowerB = null, this.fade.dispose(), this.fade = null, this._invert.dispose(), this._invert = null, this.a.disconnect(), this.a = null, this.b.disconnect(), this.b = null, this
        }, t.CrossFade
    }), Module(function(t) {
        return t.Filter = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["frequency", "type", "rolloff"], t.Filter.defaults);
            this._filters = [], this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(0, t.Type.Cents), this.gain = new t.Signal({
                value: e.gain,
                units: t.Type.Decibels,
                convert: !1
            }), this.Q = new t.Signal(e.Q), this._type = e.type, this._rolloff = e.rolloff, this.rolloff = e.rolloff, this._readOnly(["detune", "frequency", "gain", "Q"])
        }, t.extend(t.Filter), t.Filter.defaults = {
            type: "lowpass",
            frequency: 350,
            rolloff: -12,
            Q: 1,
            gain: 0
        }, Object.defineProperty(t.Filter.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(t) {
                var e, i = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"];
                if (-1 === i.indexOf(t)) throw new TypeError("Tone.Filter does not have filter type " + t);
                for (this._type = t, e = 0; e < this._filters.length; e++) this._filters[e].type = t
            }
        }), Object.defineProperty(t.Filter.prototype, "rolloff", {
            get: function() {
                return this._rolloff
            },
            set: function(t) {
                var e, i, s, n, o = [-12, -24, -48],
                    r = o.indexOf(t);
                if (-1 === r) throw new RangeError("Filter rolloff can only be -12, -24, or -48");
                for (r++, this._rolloff = t, this.input.disconnect(), e = 0; e < this._filters.length; e++) this._filters[e].disconnect(), this._filters[e] = null;
                for (this._filters = new Array(r), i = 0; r > i; i++) s = this.context.createBiquadFilter(), s.type = this._type, this.frequency.connect(s.frequency), this.detune.connect(s.detune), this.Q.connect(s.Q), this.gain.connect(s.gain), this._filters[i] = s;
                n = [this.input].concat(this._filters).concat([this.output]), this.connectSeries.apply(this, n)
            }
        }), t.Filter.prototype.dispose = function() {
            t.prototype.dispose.call(this);
            for (var e = 0; e < this._filters.length; e++) this._filters[e].disconnect(), this._filters[e] = null;
            return this._filters = null, this._writable(["detune", "frequency", "gain", "Q"]), this.frequency.dispose(), this.Q.dispose(), this.frequency = null, this.Q = null, this.detune.dispose(), this.detune = null, this.gain.dispose(), this.gain = null, this
        }, t.Filter
    }), Module(function(t) {
        return t.MultibandSplit = function() {
            var e = this.optionsObject(arguments, ["lowFrequency", "highFrequency"], t.MultibandSplit.defaults);
            this.input = this.context.createGain(), this.output = new Array(3), this.low = this.output[0] = new t.Filter(0, "lowpass"), this._lowMidFilter = new t.Filter(0, "highpass"), this.mid = this.output[1] = new t.Filter(0, "lowpass"), this.high = this.output[2] = new t.Filter(0, "highpass"), this.lowFrequency = new t.Signal(e.lowFrequency, t.Type.Frequency), this.highFrequency = new t.Signal(e.highFrequency, t.Type.Frequency), this.Q = new t.Signal(e.Q), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.connect(this.low.frequency), this.lowFrequency.connect(this._lowMidFilter.frequency), this.highFrequency.connect(this.mid.frequency), this.highFrequency.connect(this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
        }, t.extend(t.MultibandSplit), t.MultibandSplit.defaults = {
            lowFrequency: 400,
            highFrequency: 2500,
            Q: 1
        }, t.MultibandSplit.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.low = null, this._lowMidFilter.dispose(), this._lowMidFilter = null, this.mid.dispose(), this.mid = null, this.high.dispose(), this.high = null, this.lowFrequency.dispose(), this.lowFrequency = null, this.highFrequency.dispose(), this.highFrequency = null, this.Q.dispose(), this.Q = null, this
        }, t.MultibandSplit
    }), Module(function(t) {
        return t.EQ3 = function() {
            var e = this.optionsObject(arguments, ["low", "mid", "high"], t.EQ3.defaults);
            this.output = this.context.createGain(), this._multibandSplit = this.input = new t.MultibandSplit({
                lowFrequency: e.lowFrequency,
                highFrequency: e.highFrequency
            }), this._lowGain = this.context.createGain(), this._midGain = this.context.createGain(), this._highGain = this.context.createGain(), this.low = new t.Signal(this._lowGain.gain, t.Type.Decibels), this.mid = new t.Signal(this._midGain.gain, t.Type.Decibels), this.high = new t.Signal(this._highGain.gain, t.Type.Decibels), this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), this.low.value = e.low, this.mid.value = e.mid, this.high.value = e.high, this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"])
        }, t.extend(t.EQ3), t.EQ3.defaults = {
            low: 0,
            mid: 0,
            high: 0,
            lowFrequency: 400,
            highFrequency: 2500
        }, t.EQ3.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]), this._multibandSplit.dispose(), this._multibandSplit = null, this.lowFrequency = null, this.highFrequency = null, this._lowGain.disconnect(), this._lowGain = null, this._midGain.disconnect(), this._midGain = null, this._highGain.disconnect(), this._highGain = null, this.low.dispose(), this.low = null, this.mid.dispose(), this.mid = null, this.high.dispose(), this.high = null, this.Q = null, this
        }, t.EQ3
    }), Module(function(t) {
        return t.Scale = function(e, i) {
            this._outputMin = this.defaultArg(e, 0), this._outputMax = this.defaultArg(i, 1), this._scale = this.input = new t.Multiply(1), this._add = this.output = new t.Add(0), this._scale.connect(this._add), this._setRange()
        }, t.extend(t.Scale, t.SignalBase), Object.defineProperty(t.Scale.prototype, "min", {
            get: function() {
                return this._outputMin
            },
            set: function(t) {
                this._outputMin = t, this._setRange()
            }
        }), Object.defineProperty(t.Scale.prototype, "max", {
            get: function() {
                return this._outputMax
            },
            set: function(t) {
                this._outputMax = t, this._setRange()
            }
        }), t.Scale.prototype._setRange = function() {
            this._add.value = this._outputMin, this._scale.value = this._outputMax - this._outputMin
        }, t.Scale.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this
        }, t.Scale
    }), Module(function(t) {
        return t.ScaleExp = function(e, i, s) {
            this._scale = this.output = new t.Scale(e, i), this._exp = this.input = new t.Pow(this.defaultArg(s, 2)), this._exp.connect(this._scale)
        }, t.extend(t.ScaleExp, t.SignalBase), Object.defineProperty(t.ScaleExp.prototype, "exponent", {
            get: function() {
                return this._exp.value
            },
            set: function(t) {
                this._exp.value = t
            }
        }), Object.defineProperty(t.ScaleExp.prototype, "min", {
            get: function() {
                return this._scale.min
            },
            set: function(t) {
                this._scale.min = t
            }
        }), Object.defineProperty(t.ScaleExp.prototype, "max", {
            get: function() {
                return this._scale.max
            },
            set: function(t) {
                this._scale.max = t
            }
        }), t.ScaleExp.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this
        }, t.ScaleExp
    }), Module(function(t) {
        return t.FeedbackCombFilter = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["delayTime", "resonance"], t.FeedbackCombFilter.defaults);
            this.resonance = new t.Signal(e.resonance, t.Type.NormalRange), this._delay = this.input = this.output = this.context.createDelay(1), this.delayTime = new t.Signal(e.delayTime, t.Type.Time), this._feedback = this.context.createGain(), this._delay.chain(this._feedback, this._delay), this.resonance.connect(this._feedback.gain), this.delayTime.connect(this._delay.delayTime), this._readOnly(["resonance", "delayTime"])
        }, t.extend(t.FeedbackCombFilter), t.FeedbackCombFilter.defaults = {
            delayTime: .1,
            resonance: .5
        }, t.FeedbackCombFilter.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["resonance", "delayTime"]), this._delay.disconnect(), this._delay = null, this.delayTime.dispose(), this.delayTime = null, this.resonance.dispose(), this.resonance = null, this._feedback.disconnect(), this._feedback = null, this
        }, t.FeedbackCombFilter
    }), Module(function(t) {
        return t.Follower = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["attack", "release"], t.Follower.defaults);
            this._abs = new t.Abs, this._filter = this.context.createBiquadFilter(), this._filter.type = "lowpass", this._filter.frequency.value = 0, this._filter.Q.value = -100, this._frequencyValues = new t.WaveShaper, this._sub = new t.Subtract, this._delay = this.context.createDelay(), this._delay.delayTime.value = this.bufferTime, this._mult = new t.Multiply(1e4), this._attack = e.attack, this._release = e.release, this.input.chain(this._abs, this._filter, this.output), this._abs.connect(this._sub, 0, 1), this._filter.chain(this._delay, this._sub), this._sub.chain(this._mult, this._frequencyValues, this._filter.frequency), this._setAttackRelease(this._attack, this._release)
        }, t.extend(t.Follower), t.Follower.defaults = {
            attack: .05,
            release: .5
        }, t.Follower.prototype._setAttackRelease = function(t, e) {
            var i = this.bufferTime;
            t = this.secondsToFrequency(this.toSeconds(t)), e = this.secondsToFrequency(this.toSeconds(e)), t = Math.max(t, i), e = Math.max(e, i), this._frequencyValues.setMap(function(i) {
                return 0 >= i ? t : e
            })
        }, Object.defineProperty(t.Follower.prototype, "attack", {
            get: function() {
                return this._attack
            },
            set: function(t) {
                this._attack = t, this._setAttackRelease(this._attack, this._release)
            }
        }), Object.defineProperty(t.Follower.prototype, "release", {
            get: function() {
                return this._release
            },
            set: function(t) {
                this._release = t, this._setAttackRelease(this._attack, this._release)
            }
        }), t.Follower.prototype.connect = t.Signal.prototype.connect, t.Follower.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._filter.disconnect(), this._filter = null, this._frequencyValues.disconnect(), this._frequencyValues = null, this._delay.disconnect(), this._delay = null, this._sub.disconnect(), this._sub = null, this._abs.dispose(), this._abs = null, this._mult.dispose(), this._mult = null, this._curve = null, this
        }, t.Follower
    }), Module(function(t) {
        return t.Gate = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["threshold", "attack", "release"], t.Gate.defaults);
            this._follower = new t.Follower(e.attack, e.release), this._gt = new t.GreaterThan(this.dbToGain(e.threshold)), this.input.connect(this.output), this.input.chain(this._gt, this._follower, this.output.gain)
        }, t.extend(t.Gate), t.Gate.defaults = {
            attack: .1,
            release: .1,
            threshold: -40
        }, Object.defineProperty(t.Gate.prototype, "threshold", {
            get: function() {
                return this.gainToDb(this._gt.value)
            },
            set: function(t) {
                this._gt.value = this.dbToGain(t)
            }
        }), Object.defineProperty(t.Gate.prototype, "attack", {
            get: function() {
                return this._follower.attack
            },
            set: function(t) {
                this._follower.attack = t
            }
        }), Object.defineProperty(t.Gate.prototype, "release", {
            get: function() {
                return this._follower.release
            },
            set: function(t) {
                this._follower.release = t
            }
        }), t.Gate.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._follower.dispose(), this._gt.dispose(), this._follower = null, this._gt = null, this
        }, t.Gate
    }), Module(function(t) {
        return t.Clock = function(e, i) {
            this._oscillator = null, this._jsNode = this.context.createScriptProcessor(this.bufferSize, 1, 1), this._jsNode.onaudioprocess = this._processBuffer.bind(this), this.frequency = new t.Signal(e, t.Type.Frequency), this._upTick = !1, this.tick = i, this.onended = t.noOp, this._jsNode.noGC()
        }, t.extend(t.Clock), t.Clock.prototype.start = function(t) {
            if (!this._oscillator) {
                this._oscillator = this.context.createOscillator(), this._oscillator.type = "square", this._oscillator.connect(this._jsNode), this.frequency.connect(this._oscillator.frequency), this._upTick = !1;
                var e = this.toSeconds(t);
                this._oscillator.start(e)
            }
            return this
        }, t.Clock.prototype.stop = function(t) {
            var e, i;
            return this._oscillator && (e = this.now(), i = this.toSeconds(t, e), this._oscillator.stop(i), this._oscillator = null, t ? setTimeout(this.onended, 1e3 * (i - e)) : this.onended()), this
        }, t.Clock.prototype._processBuffer = function(t) {
            var e, i, s = this.defaultArg(t.playbackTime, this.now()),
                n = this._jsNode.bufferSize,
                o = t.inputBuffer.getChannelData(0),
                r = this._upTick,
                l = this;
            for (e = 0; n > e; e++) i = o[e], i > 0 && !r ? (r = !0, setTimeout(function() {
                var t = s + l.samplesToSeconds(e + 2 * n);
                return function() {
                    l.tick && l.tick(t)
                }
            }(), 0)) : 0 > i && r && (r = !1);
            this._upTick = r
        }, t.Clock.prototype.dispose = function() {
            return this._jsNode.disconnect(), this.frequency.dispose(), this.frequency = null, this._oscillator && (this._oscillator.disconnect(), this._oscillator = null), this._jsNode.onaudioprocess = t.noOp, this._jsNode = null, this.tick = null, this.onended = t.noOp, this
        }, t.Clock
    }), Module(function(Tone) {
        var tatum, timelineTicks, transportTicks, swingSubdivision, swingTatum, swingAmount, transportTimeSignature, loopStart, loopEnd, intervals, timeouts, transportTimeline, timelineProgress, SyncedSources, SyncedSignals, processIntervals, processTimeouts, processTimeline, TimelineEventIDCounter, TimelineEvent, TransportConstructor;
        return Tone.Transport = function() {
            this._clock = new Tone.Clock(0, this._processTick.bind(this)), this._clock.onended = this._onended.bind(this), this.loop = !1, this.bpm = new Tone.Signal(120, Tone.Type.BPM), this._bpmMult = new Tone.Multiply(1 / 60 * tatum), this.state = Tone.State.Stopped, this.bpm.chain(this._bpmMult, this._clock.frequency)
        }, Tone.extend(Tone.Transport), Tone.Transport.defaults = {
            bpm: 120,
            swing: 0,
            swingSubdivision: "16n",
            timeSignature: 4,
            loopStart: 0,
            loopEnd: "4m"
        }, tatum = 12, timelineTicks = 0, transportTicks = 0, swingSubdivision = "16n", swingTatum = 3, swingAmount = 0, transportTimeSignature = 4, loopStart = 0, loopEnd = 4 * tatum, intervals = [], timeouts = [], transportTimeline = [], timelineProgress = 0, SyncedSources = [], SyncedSignals = [], Tone.Transport.prototype._processTick = function(t) {
            this.state === Tone.State.Started && (swingAmount > 0 && timelineTicks % tatum !== 0 && timelineTicks % swingTatum === 0 && (t += this._ticksToSeconds(swingTatum) * swingAmount), processIntervals(t), processTimeouts(t), processTimeline(t), transportTicks += 1, timelineTicks += 1, this.loop && timelineTicks === loopEnd && this._setTicks(loopStart))
        }, Tone.Transport.prototype._setTicks = function(t) {
            var e, i;
            for (timelineTicks = t, e = 0; e < transportTimeline.length; e++)
                if (i = transportTimeline[e], i.callbackTick() >= t) {
                    timelineProgress = e;
                    break
                }
        }, processIntervals = function(t) {
            var e, i, s;
            for (e = 0, i = intervals.length; i > e; e++) s = intervals[e], s.testInterval(transportTicks) && s.doCallback(t)
        }, processTimeouts = function(t) {
            var e, i, s, n, o = 0;
            for (e = 0, i = timeouts.length; i > e; e++)
                if (s = timeouts[e], n = s.callbackTick(), transportTicks >= n) s.doCallback(t), o++;
                else if (n > transportTicks) break;
            timeouts.splice(0, o)
        }, processTimeline = function(t) {
            var e, i, s, n;
            for (e = timelineProgress, i = transportTimeline.length; i > e; e++)
                if (s = transportTimeline[e], n = s.callbackTick(), n === timelineTicks) timelineProgress = e, s.doCallback(t);
                else if (n > timelineTicks) break
        }, Tone.Transport.prototype.setInterval = function(t, e, i) {
            var s = this._toTicks(e),
                n = new TimelineEvent(t, i, s, transportTicks);
            return intervals.push(n), n.id
        }, Tone.Transport.prototype.clearInterval = function(t) {
            var e, i;
            for (e = 0; e < intervals.length; e++)
                if (i = intervals[e], i.id === t) return intervals.splice(e, 1), !0;
            return !1
        }, Tone.Transport.prototype.clearIntervals = function() {
            var t = intervals.length > 0;
            return intervals = [], t
        }, Tone.Transport.prototype.setTimeout = function(t, e, i) {
            var s, n, o, r = this._toTicks(e),
                l = new TimelineEvent(t, i, r + transportTicks, 0);
            for (s = 0, n = timeouts.length; n > s; s++)
                if (o = timeouts[s], o.callbackTick() > l.callbackTick()) return timeouts.splice(s, 0, l), l.id;
            return timeouts.push(l), l.id
        }, Tone.Transport.prototype.clearTimeout = function(t) {
            var e, i;
            for (e = 0; e < timeouts.length; e++)
                if (i = timeouts[e], i.id === t) return timeouts.splice(e, 1), !0;
            return !1
        }, Tone.Transport.prototype.clearTimeouts = function() {
            var t = timeouts.length > 0;
            return timeouts = [], t
        }, Tone.Transport.prototype.setTimeline = function(t, e, i) {
            var s, n, o, r = this._toTicks(e),
                l = new TimelineEvent(t, i, r, 0);
            for (s = timelineProgress, n = transportTimeline.length; n > s; s++)
                if (o = transportTimeline[s], o.callbackTick() > l.callbackTick()) return transportTimeline.splice(s, 0, l), l.id;
            return transportTimeline.push(l), l.id
        }, Tone.Transport.prototype.clearTimeline = function(t) {
            var e, i;
            for (e = 0; e < transportTimeline.length; e++)
                if (i = transportTimeline[e], i.id === t) return transportTimeline.splice(e, 1), !0;
            return !1
        }, Tone.Transport.prototype.clearTimelines = function() {
            timelineProgress = 0;
            var t = transportTimeline.length > 0;
            return transportTimeline = [], t
        }, Tone.Transport.prototype._toTicks = function(t) {
            var e = this.toSeconds(t),
                i = this.notationToSeconds("4n"),
                s = e / i,
                n = s * tatum;
            return Math.round(n)
        }, Tone.Transport.prototype._ticksToSeconds = function(t, e, i) {
            t = Math.floor(t);
            var s = this.notationToSeconds("4n", e, i);
            return s * t / tatum
        }, Tone.Transport.prototype.nextBeat = function(t) {
            var e, i, s;
            return t = this.defaultArg(t, "4n"), e = this._toTicks(t), i = transportTicks % e, s = i, i > 0 && (s = e - i), this._ticksToSeconds(s)
        }, Tone.Transport.prototype.start = function(t, e) {
            var i, s, n, o;
            if (this.state === Tone.State.Stopped || this.state === Tone.State.Paused)
                for (this.isUndef(e) || this._setTicks(this._toTicks(e)), this.state = Tone.State.Started, i = this.toSeconds(t), this._clock.start(i), s = 0; s < SyncedSources.length; s++) n = SyncedSources[s].source, o = SyncedSources[s].delay, n.start(i + o);
            return this
        }, Tone.Transport.prototype.stop = function(t) {
            var e, i, s;
            if (this.state === Tone.State.Started || this.state === Tone.State.Paused)
                for (e = this.toSeconds(t), this._clock.stop(e), i = 0; i < SyncedSources.length; i++) s = SyncedSources[i].source, s.stop(e);
            else this._onended();
            return this
        }, Tone.Transport.prototype._onended = function() {
            transportTicks = 0, this._setTicks(0), this.clearTimeouts(), this.state = Tone.State.Stopped
        }, Tone.Transport.prototype.pause = function(t) {
            var e, i, s;
            if (this.state === Tone.State.Started)
                for (this.state = Tone.State.Paused, e = this.toSeconds(t), this._clock.stop(e), i = 0; i < SyncedSources.length; i++) s = SyncedSources[i].source, s.pause(e);
            return this
        }, Object.defineProperty(Tone.Transport.prototype, "timeSignature", {
            get: function() {
                return transportTimeSignature
            },
            set: function(t) {
                transportTimeSignature = t
            }
        }), Object.defineProperty(Tone.Transport.prototype, "loopStart", {
            get: function() {
                return this._ticksToSeconds(loopStart)
            },
            set: function(t) {
                loopStart = this._toTicks(t)
            }
        }), Object.defineProperty(Tone.Transport.prototype, "loopEnd", {
            get: function() {
                return this._ticksToSeconds(loopEnd)
            },
            set: function(t) {
                loopEnd = this._toTicks(t)
            }
        }), Tone.Transport.prototype.setLoopPoints = function(t, e) {
            return this.loopStart = t, this.loopEnd = e, this
        }, Object.defineProperty(Tone.Transport.prototype, "swing", {
            get: function() {
                return 2 * swingAmount
            },
            set: function(t) {
                swingAmount = .5 * t
            }
        }), Object.defineProperty(Tone.Transport.prototype, "swingSubdivision", {
            get: function() {
                return swingSubdivision
            },
            set: function(t) {
                swingSubdivision = t, swingTatum = this._toTicks(t)
            }
        }), Object.defineProperty(Tone.Transport.prototype, "position", {
            get: function() {
                var t, e = timelineTicks / tatum,
                    i = Math.floor(e / transportTimeSignature),
                    s = Math.floor(e % 1 * 4);
                return e = Math.floor(e) % transportTimeSignature, t = [i, e, s], t.join(":")
            },
            set: function(t) {
                var e = this._toTicks(t);
                this._setTicks(e)
            }
        }), Tone.Transport.prototype.syncSource = function(t, e) {
            return SyncedSources.push({
                source: t,
                delay: this.toSeconds(this.defaultArg(e, 0))
            }), this
        }, Tone.Transport.prototype.unsyncSource = function(t) {
            for (var e = 0; e < SyncedSources.length; e++) SyncedSources[e].source === t && SyncedSources.splice(e, 1);
            return this
        }, Tone.Transport.prototype.syncSignal = function(t, e) {
            e || (e = 0 !== t._value.value ? t._value.value / this.bpm.value : 0);
            var i = this.context.createGain();
            return i.gain.value = e, this.bpm.chain(i, t._value), SyncedSignals.push({
                ratio: i,
                signal: t,
                initial: t._value.value
            }), t._value.value = 0, this
        }, Tone.Transport.prototype.unsyncSignal = function(t) {
            var e, i;
            for (e = 0; e < SyncedSignals.length; e++) i = SyncedSignals[e], i.signal === t && (i.ratio.disconnect(), i.signal._value.value = i.initial, SyncedSignals.splice(e, 1));
            return this
        }, Tone.Transport.prototype.dispose = function() {
            return this._clock.dispose(), this._clock = null, this.bpm.dispose(), this.bpm = null, this._bpmMult.dispose(), this._bpmMult = null, this
        }, TimelineEventIDCounter = 0, TimelineEvent = function(t, e, i, s) {
            this.startTicks = s, this.tickTime = i, this.callback = t, this.context = e, this.id = TimelineEventIDCounter++
        }, TimelineEvent.prototype.doCallback = function(t) {
            this.callback.call(this.context, t)
        }, TimelineEvent.prototype.callbackTick = function() {
            return this.startTicks + this.tickTime
        }, TimelineEvent.prototype.testInterval = function(t) {
            return (t - this.startTicks) % this.tickTime === 0
        }, Tone.prototype.isNotation = function() {
            var t = new RegExp(/[0-9]+[mnt]$/i);
            return function(e) {
                return t.test(e)
            }
        }(), Tone.prototype.isTransportTime = function() {
            var t = new RegExp(/^\d+(\.\d+)?:\d+(\.\d+)?(:\d+(\.\d+)?)?$/i);
            return function(e) {
                return t.test(e)
            }
        }(), Tone.prototype.notationToSeconds = function(t, e, i) {
            var s, n, o, r;
            return e = this.defaultArg(e, Tone.Transport.bpm.value), i = this.defaultArg(i, transportTimeSignature), s = 60 / e, n = parseInt(t, 10), o = 0, 0 === n && (o = 0), r = t.slice(-1), o = "t" === r ? 4 / n * 2 / 3 : "n" === r ? 4 / n : "m" === r ? n * i : 0, s * o
        }, Tone.prototype.transportTimeToSeconds = function(t, e, i) {
            var s, n, o, r, l;
            return e = this.defaultArg(e, Tone.Transport.bpm.value), i = this.defaultArg(i, transportTimeSignature), s = 0, n = 0, o = 0, r = t.split(":"), 2 === r.length ? (s = parseFloat(r[0]), n = parseFloat(r[1])) : 1 === r.length ? n = parseFloat(r[0]) : 3 === r.length && (s = parseFloat(r[0]), n = parseFloat(r[1]), o = parseFloat(r[2])), l = s * i + n + o / 4, l * this.notationToSeconds("4n")
        }, Tone.prototype.toTransportTime = function(t, e, i) {
            var s, n, o, r, l, a = this.toSeconds(t, e, i);
            return e = this.defaultArg(e, Tone.Transport.bpm.value), i = this.defaultArg(i, transportTimeSignature), s = this.notationToSeconds("4n"), n = a / s, o = Math.floor(n / i), r = Math.floor(n % 1 * 4), n = Math.floor(n) % i, l = [o, n, r], l.join(":")
        }, Tone.prototype.toFrequency = function(t, e) {
            return this.isFrequency(t) ? parseFloat(t) : this.isNotation(t) || this.isTransportTime(t) ? this.secondsToFrequency(this.toSeconds(t, e)) : t
        }, Tone.prototype.toSeconds = function(time, now) {
            var plusTime, components, originalTime, i, symb, val;
            if (now = this.defaultArg(now, this.now()), "number" == typeof time) return time;
            if ("string" == typeof time) {
                if (plusTime = 0, "+" === time.charAt(0) && (plusTime = now, time = time.slice(1)), components = time.split(/[\(\)\-\+\/\*]/), components.length > 1) {
                    for (originalTime = time, i = 0; i < components.length; i++) symb = components[i].trim(), "" !== symb && (val = this.toSeconds(symb), time = time.replace(symb, val));
                    try {
                        time = eval(time)
                    } catch (e) {
                        throw new EvalError("problem evaluating Tone.Type.Time: " + originalTime)
                    }
                } else time = this.isNotation(time) ? this.notationToSeconds(time) : this.isTransportTime(time) ? this.transportTimeToSeconds(time) : this.isFrequency(time) ? this.frequencyToSeconds(time) : parseFloat(time);
                return time + plusTime
            }
            return now
        }, TransportConstructor = Tone.Transport, Tone._initAudioContext(function() {
            if ("function" == typeof Tone.Transport) Tone.Transport = new Tone.Transport;
            else {
                Tone.Transport.stop();
                var t = Tone.Transport.bpm.value;
                Tone.Transport._clock.dispose(), TransportConstructor.call(Tone.Transport), Tone.Transport.bpm.value = t
            }
        }), Tone.Transport
    }), Module(function(t) {
        t.Master = function() {
            t.call(this), this._unmutedVolume = 1, this._muted = !1, this.volume = new t.Signal(this.output.gain, t.Type.Decibels), this.input.chain(this.output, this.context.destination)
        }, t.extend(t.Master), t.Master.defaults = {
            volume: 0,
            mute: !1
        }, Object.defineProperty(t.Master.prototype, "mute", {
            get: function() {
                return this._muted
            },
            set: function(t) {
                !this._muted && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -(1 / 0)) : this._muted && !t && (this.volume.value = this._unmutedVolume), this._muted = t
            }
        }), t.Master.prototype.chain = function() {
            this.input.disconnect(), this.input.chain.apply(this.input, arguments), arguments[arguments.length - 1].connect(this.output)
        }, t.prototype.toMaster = function() {
            return this.connect(t.Master), this
        }, AudioNode.prototype.toMaster = function() {
            return this.connect(t.Master), this
        };
        var e = t.Master;
        return t._initAudioContext(function() {
            t.prototype.isUndef(t.Master) ? (e.prototype.dispose.call(t.Master), e.call(t.Master)) : t.Master = new e
        }), t.Master
    }), Module(function(t) {
        return t.Source = function(e) {
            t.call(this, 0, 1), e = this.defaultArg(e, t.Source.defaults), this.onended = e.onended, this._nextStart = 1 / 0, this._nextStop = 1 / 0, this.volume = new t.Signal({
                param: this.output.gain,
                value: e.volume,
                units: t.Type.Decibels
            }), this._readOnly("volume"), this._timeout = -1, this.output.channelCount = 2, this.output.channelCountMode = "explicit"
        }, t.extend(t.Source), t.Source.defaults = {
            onended: t.noOp,
            volume: 0
        }, Object.defineProperty(t.Source.prototype, "state", {
            get: function() {
                return this._stateAtTime(this.now())
            }
        }), t.Source.prototype._stateAtTime = function(e) {
            return e = this.toSeconds(e), this._nextStart <= e && this._nextStop > e ? t.State.Started : this._nextStop <= e ? t.State.Stopped : t.State.Stopped
        }, t.Source.prototype.start = function(e) {
            return e = this.toSeconds(e), (this._stateAtTime(e) !== t.State.Started || this.retrigger) && (this._nextStart = e, this._nextStop = 1 / 0, this._start.apply(this, arguments)), this
        }, t.Source.prototype.stop = function(e) {
            var i, s = this.now();
            return e = this.toSeconds(e, s), this._stateAtTime(e) === t.State.Started && (this._nextStop = this.toSeconds(e), clearTimeout(this._timeout), i = e - s, i > 0 ? this._timeout = setTimeout(this.onended, 1e3 * i + 20) : this.onended(), this._stop.apply(this, arguments)), this
        }, t.Source.prototype.pause = function(t) {
            return this.stop(t), this
        }, t.Source.prototype.sync = function(e) {
            return t.Transport.syncSource(this, e), this
        }, t.Source.prototype.unsync = function() {
            return t.Transport.unsyncSource(this), this
        }, t.Source.prototype.dispose = function() {
            t.prototype.dispose.call(this), this.stop(), clearTimeout(this._timeout), this.onended = t.noOp, this._writable("volume"), this.volume.dispose(), this.volume = null
        }, t.Source
    }), Module(function(t) {
        return t.Oscillator = function() {
            var e = this.optionsObject(arguments, ["frequency", "type"], t.Oscillator.defaults);
            t.Source.call(this, e), this._oscillator = null, this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._wave = null, this._phase = e.phase, this._type = null, this.type = e.type, this.phase = this._phase, this._readOnly(["frequency", "detune"])
        }, t.extend(t.Oscillator, t.Source), t.Oscillator.defaults = {
            type: "sine",
            frequency: 440,
            detune: 0,
            phase: 0
        }, t.Oscillator.prototype._start = function(t) {
            this._oscillator = this.context.createOscillator(), this._oscillator.setPeriodicWave(this._wave), this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.start(this.toSeconds(t))
        }, t.Oscillator.prototype._stop = function(t) {
            return this._oscillator && (this._oscillator.stop(this.toSeconds(t)), this._oscillator = null), this
        }, t.Oscillator.prototype.syncFrequency = function() {
            return t.Transport.syncSignal(this.frequency), this
        }, t.Oscillator.prototype.unsyncFrequency = function() {
            return t.Transport.unsyncSignal(this.frequency), this
        }, Object.defineProperty(t.Oscillator.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(t) {
                var e, i, s, n, o, r = t,
                    l = 4096,
                    a = l / 2,
                    h = new Float32Array(a),
                    u = new Float32Array(a),
                    c = 1,
                    p = /(sine|triangle|square|sawtooth)(\d+)$/.exec(t);
                for (p && (c = parseInt(p[2]), t = p[1], c = Math.max(c, 2), a = c), e = this._phase, i = 1; a > i; ++i) {
                    switch (s = 2 / (i * Math.PI), t) {
                        case "sine":
                            n = c >= i ? 1 : 0;
                            break;
                        case "square":
                            n = 1 & i ? 2 * s : 0;
                            break;
                        case "sawtooth":
                            n = s * (1 & i ? 1 : -1);
                            break;
                        case "triangle":
                            n = 1 & i ? 2 * s * s * (i - 1 >> 1 & 1 ? -1 : 1) : 0;
                            break;
                        default:
                            throw new TypeError("invalid oscillator type: " + t)
                    }
                    0 !== n ? (h[i] = -n * Math.sin(e * i), u[i] = n * Math.cos(e * i)) : (h[i] = 0, u[i] = 0)
                }
                o = this.context.createPeriodicWave(h, u), this._wave = o, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave), this._type = r
            }
        }), Object.defineProperty(t.Oscillator.prototype, "phase", {
            get: function() {
                return this._phase * (180 / Math.PI)
            },
            set: function(t) {
                this._phase = t * Math.PI / 180, this.type = this._type
            }
        }), t.Oscillator.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), null !== this._oscillator && (this._oscillator.disconnect(), this._oscillator = null), this._wave = null, this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this
        }, t.Oscillator
    }), Module(function(t) {
        return t.AudioToGain = function() {
            this._norm = this.input = this.output = new t.WaveShaper(function(t) {
                return (t + 1) / 2
            })
        }, t.extend(t.AudioToGain, t.SignalBase), t.AudioToGain.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this
        }, t.AudioToGain
    }), Module(function(t) {
        return t.LFO = function() {
            var e = this.optionsObject(arguments, ["frequency", "min", "max"], t.LFO.defaults);
            this.oscillator = new t.Oscillator({
                frequency: e.frequency,
                type: e.type,
                phase: e.phase + 90
            }), this.frequency = this.oscillator.frequency, this.amplitude = this.oscillator.volume, this.amplitude.units = t.Type.NormalRange, this.amplitude.value = e.amplitude, this._a2g = new t.AudioToGain, this._scaler = this.output = new t.Scale(e.min, e.max), this._units = t.Type.Default, this.oscillator.chain(this._a2g, this._scaler), this._readOnly(["amplitude", "frequency", "oscillator"])
        }, t.extend(t.LFO, t.Oscillator), t.LFO.defaults = {
            type: "sine",
            min: 0,
            max: 1,
            phase: 0,
            frequency: "4n",
            amplitude: 1
        }, t.LFO.prototype.start = function(t) {
            return this.oscillator.start(t), this
        }, t.LFO.prototype.stop = function(t) {
            return this.oscillator.stop(t), this
        }, t.LFO.prototype.sync = function(t) {
            return this.oscillator.sync(t), this.oscillator.syncFrequency(), this
        }, t.LFO.prototype.unsync = function() {
            return this.oscillator.unsync(), this.oscillator.unsyncFrequency(), this
        }, Object.defineProperty(t.LFO.prototype, "min", {
            get: function() {
                return this._toUnits(this._scaler.min)
            },
            set: function(t) {
                t = this._fromUnits(t), this._scaler.min = t
            }
        }), Object.defineProperty(t.LFO.prototype, "max", {
            get: function() {
                return this._toUnits(this._scaler.max)
            },
            set: function(t) {
                t = this._fromUnits(t), this._scaler.max = t
            }
        }), Object.defineProperty(t.LFO.prototype, "type", {
            get: function() {
                return this.oscillator.type
            },
            set: function(t) {
                this.oscillator.type = t
            }
        }), Object.defineProperty(t.LFO.prototype, "phase", {
            get: function() {
                return this.oscillator.phase - 90
            },
            set: function(t) {
                this.oscillator.phase = t + 90
            }
        }), Object.defineProperty(t.LFO.prototype, "units", {
            get: function() {
                return this._units
            },
            set: function(t) {
                var e = this.min,
                    i = this.max;
                this._units = t, this.min = e, this.max = i
            }
        }), t.LFO.prototype.connect = function(e) {
            return e.constructor === t.Signal && (this.convert = e.convert, this.units = e.units), t.Signal.prototype.connect.apply(this, arguments), this
        }, t.LFO.prototype._fromUnits = t.Signal.prototype._fromUnits, t.LFO.prototype._toUnits = t.Signal.prototype._toUnits, t.LFO.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["amplitude", "frequency", "oscillator"]), this.oscillator.dispose(), this.oscillator = null, this._scaler.dispose(), this._scaler = null, this._a2g.dispose(), this._a2g = null, this.frequency = null, this.amplitude = null, this
        }, t.LFO
    }), Module(function(t) {
        return t.Limiter = function(e) {
            this._compressor = this.input = this.output = new t.Compressor({
                attack: .001,
                decay: .001,
                threshold: e
            }), this.threshold = this._compressor.threshold, this._readOnly("threshold")
        }, t.extend(t.Limiter), t.Limiter.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._compressor.dispose(), this._compressor = null, this._writable("threshold"), this.threshold = null,
                this
        }, t.Limiter
    }), Module(function(t) {
        return t.LowpassCombFilter = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["delayTime", "resonance", "dampening"], t.LowpassCombFilter.defaults);
            this._delay = this.input = this.context.createDelay(1), this.delayTime = new t.Signal(e.delayTime, t.Type.Time), this._lowpass = this.output = this.context.createBiquadFilter(), this._lowpass.Q.value = 0, this._lowpass.type = "lowpass", this.dampening = new t.Signal(this._lowpass.frequency, t.Type.Frequency), this.dampening.value = e.dampening, this._feedback = this.context.createGain(), this.resonance = new t.Signal(e.resonance, t.Type.NormalRange), this._delay.chain(this._lowpass, this._feedback, this._delay), this.delayTime.connect(this._delay.delayTime), this.resonance.connect(this._feedback.gain), this.dampening.connect(this._lowpass.frequency), this._readOnly(["dampening", "resonance", "delayTime"])
        }, t.extend(t.LowpassCombFilter), t.LowpassCombFilter.defaults = {
            delayTime: .1,
            resonance: .5,
            dampening: 3e3
        }, t.LowpassCombFilter.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["dampening", "resonance", "delayTime"]), this.dampening.dispose(), this.dampening = null, this.resonance.dispose(), this.resonance = null, this._delay.disconnect(), this._delay = null, this._lowpass.disconnect(), this._lowpass = null, this._feedback.disconnect(), this._feedback = null, this.delayTime.dispose(), this.delayTime = null, this
        }, t.LowpassCombFilter
    }), Module(function(t) {
        return t.Merge = function() {
            t.call(this, 2, 0), this.left = this.input[0] = this.context.createGain(), this.right = this.input[1] = this.context.createGain(), this._merger = this.output = this.context.createChannelMerger(2), this.left.connect(this._merger, 0, 0), this.right.connect(this._merger, 0, 1)
        }, t.extend(t.Merge), t.Merge.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this.left.disconnect(), this.left = null, this.right.disconnect(), this.right = null, this._merger.disconnect(), this._merger = null, this
        }, t.Merge
    }), Module(function(t) {
        return t.Meter = function(e, i, s) {
            t.call(this), this._channels = this.defaultArg(e, 1), this._smoothing = this.defaultArg(i, .8), this._clipMemory = 1e3 * this.defaultArg(s, .5), this._volume = new Array(this._channels), this._values = new Array(this._channels);
            for (var n = 0; n < this._channels; n++) this._volume[n] = 0, this._values[n] = 0;
            this._lastClip = 0, this._jsNode = this.context.createScriptProcessor(this.bufferSize, this._channels, 1), this._jsNode.onaudioprocess = this._onprocess.bind(this), this._jsNode.noGC(), this.input.connect(this.output), this.input.connect(this._jsNode)
        }, t.extend(t.Meter), t.Meter.prototype._onprocess = function(t) {
            var e, i, s, n, o, r, l, a, h, u = this._jsNode.bufferSize,
                c = this._smoothing;
            for (e = 0; e < this._channels; e++) {
                for (i = t.inputBuffer.getChannelData(e), s = 0, n = 0, r = !1, l = 0; u > l; l++) o = i[l], !r && o > .95 && (r = !0, this._lastClip = Date.now()), n += o, s += o * o;
                a = n / u, h = Math.sqrt(s / u), this._volume[e] = Math.max(h, this._volume[e] * c), this._values[e] = a
            }
        }, t.Meter.prototype.getLevel = function(t) {
            t = this.defaultArg(t, 0);
            var e = this._volume[t];
            return 1e-5 > e ? 0 : e
        }, t.Meter.prototype.getValue = function(t) {
            return t = this.defaultArg(t, 0), this._values[t]
        }, t.Meter.prototype.getDb = function(t) {
            return this.gainToDb(this.getLevel(t))
        }, t.Meter.prototype.isClipped = function() {
            return Date.now() - this._lastClip < this._clipMemory
        }, t.Meter.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._jsNode.disconnect(), this._jsNode.onaudioprocess = null, this._volume = null, this._values = null, this
        }, t.Meter
    }), Module(function(t) {
        return t.Split = function() {
            t.call(this, 0, 2), this._splitter = this.input = this.context.createChannelSplitter(2), this.left = this.output[0] = this.context.createGain(), this.right = this.output[1] = this.context.createGain(), this._splitter.connect(this.left, 0, 0), this._splitter.connect(this.right, 1, 0)
        }, t.extend(t.Split), t.Split.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._splitter.disconnect(), this.left.disconnect(), this.right.disconnect(), this.left = null, this.right = null, this._splitter = null, this
        }, t.Split
    }), Module(function(t) {
        t.MidSideSplit = function() {
            t.call(this, 0, 2), this._split = this.input = new t.Split, this.mid = this.output[0] = new t.Expr("($0 + $1) * $2"), this.side = this.output[1] = new t.Expr("($0 - $1) * $2"), this._split.connect(this.mid, 0, 0), this._split.connect(this.mid, 1, 1), this._split.connect(this.side, 0, 0), this._split.connect(this.side, 1, 1), e.connect(this.mid, 0, 2), e.connect(this.side, 0, 2)
        }, t.extend(t.MidSideSplit);
        var e = null;
        return t._initAudioContext(function() {
            e = new t.Signal(1 / Math.sqrt(2))
        }), t.MidSideSplit.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._split.dispose(), this._split = null, this
        }, t.MidSideSplit
    }), Module(function(t) {
        t.MidSideMerge = function() {
            t.call(this, 2, 0), this.mid = this.input[0] = this.context.createGain(), this._left = new t.Expr("($0 + $1) * $2"), this.side = this.input[1] = this.context.createGain(), this._right = new t.Expr("($0 - $1) * $2"), this._merge = this.output = new t.Merge, this.mid.connect(this._left, 0, 0), this.side.connect(this._left, 0, 1), this.mid.connect(this._right, 0, 0), this.side.connect(this._right, 0, 1), this._left.connect(this._merge, 0, 0), this._right.connect(this._merge, 0, 1), e.connect(this._left, 0, 2), e.connect(this._right, 0, 2)
        }, t.extend(t.MidSideMerge);
        var e = null;
        return t._initAudioContext(function() {
            e = new t.Signal(1 / Math.sqrt(2))
        }), t.MidSideMerge.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this.mid.disconnect(), this.mid = null, this.side.disconnect(), this.side = null, this._left.dispose(), this._left = null, this._right.dispose(), this._right = null, this._merge.dispose(), this._merge = null, this
        }, t.MidSideMerge
    }), Module(function(t) {
        return t.MidSideCompressor = function(e) {
            e = this.defaultArg(e, t.MidSideCompressor.defaults), this._midSideSplit = this.input = new t.MidSideSplit, this._midSideMerge = this.output = new t.MidSideMerge, this.mid = new t.Compressor(e.mid), this.side = new t.Compressor(e.side), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), this._readOnly(["mid", "side"])
        }, t.extend(t.MidSideCompressor), t.MidSideCompressor.defaults = {
            mid: {
                ratio: 3,
                threshold: -24,
                release: .03,
                attack: .02,
                knee: 16
            },
            side: {
                ratio: 6,
                threshold: -30,
                release: .25,
                attack: .03,
                knee: 10
            }
        }, t.MidSideCompressor.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["mid", "side"]), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this
        }, t.MidSideCompressor
    }), Module(function(t) {
        return t.Mono = function() {
            t.call(this, 1, 0), this._merge = this.output = new t.Merge, this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1), this.input.gain.value = this.dbToGain(-10)
        }, t.extend(t.Mono), t.Mono.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._merge.dispose(), this._merge = null, this
        }, t.Mono
    }), Module(function(t) {
        return t.MultibandCompressor = function(e) {
            e = this.defaultArg(arguments, t.MultibandCompressor.defaults), this._splitter = this.input = new t.MultibandSplit({
                lowFrequency: e.lowFrequency,
                highFrequency: e.highFrequency
            }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = this.context.createGain(), this.low = new t.Compressor(e.low), this.mid = new t.Compressor(e.mid), this.high = new t.Compressor(e.high), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"])
        }, t.extend(t.MultibandCompressor), t.MultibandCompressor.defaults = {
            low: t.Compressor.defaults,
            mid: t.Compressor.defaults,
            high: t.Compressor.defaults,
            lowFrequency: 250,
            highFrequency: 2e3
        }, t.MultibandCompressor.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._splitter.dispose(), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this._splitter = null, this.low = null, this.mid = null, this.high = null, this.lowFrequency = null, this.highFrequency = null, this
        }, t.MultibandCompressor
    }), Module(function(t) {
        return t.GainToAudio = function() {
            this._norm = this.input = this.output = new t.WaveShaper(function(t) {
                return 2 * Math.abs(t) - 1
            })
        }, t.extend(t.GainToAudio, t.SignalBase), t.GainToAudio.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this
        }, t.GainToAudio
    }), Module(function(t) {
        return t.Panner = function(e) {
            t.call(this), this._hasStereoPanner = this.isFunction(this.context.createStereoPanner), this._hasStereoPanner ? (this._panner = this.input = this.output = this.context.createStereoPanner(), this.pan = new t.Signal(0, t.Type.NormalRange), this._scalePan = new t.GainToAudio, this.pan.chain(this._scalePan, this._panner.pan)) : (this._crossFade = new t.CrossFade, this._merger = this.output = new t.Merge, this._splitter = this.input = new t.Split, this.pan = this._crossFade.fade, this._splitter.connect(this._crossFade, 0, 0), this._splitter.connect(this._crossFade, 1, 1), this._crossFade.a.connect(this._merger, 0, 0), this._crossFade.b.connect(this._merger, 0, 1)), this.pan.value = this.defaultArg(e, .5), this._readOnly("pan")
        }, t.extend(t.Panner), t.Panner.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable("pan"), this._hasStereoPanner ? (this._panner.disconnect(), this._panner = null, this.pan.dispose(), this.pan = null, this._scalePan.dispose(), this._scalePan = null) : (this._crossFade.dispose(), this._crossFade = null, this._splitter.dispose(), this._splitter = null, this._merger.dispose(), this._merger = null, this.pan = null), this
        }, t.Panner
    }), Module(function(t) {
        return t.Volume = function(e) {
            this.output = this.input = this.context.createGain(), this.volume = new t.Signal(this.output.gain, t.Type.Decibels), this.volume.value = this.defaultArg(e, 0), this._readOnly("volume")
        }, t.extend(t.Volume), t.Volume.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable("volume"), this.volume.dispose(), this.volume = null, this
        }, t.Volume
    }), Module(function(t) {
        return t.PanVol = function(e, i) {
            this._panner = this.input = new t.Panner(e), this.pan = this._panner.pan, this._volume = this.output = new t.Volume(i), this.volume = this._volume.volume, this._panner.connect(this._volume), this._readOnly(["pan", "volume"])
        }, t.extend(t.PanVol), t.PanVol.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["pan", "volume"]), this._panner.dispose(), this._panner = null, this._volume.dispose(), this._volume = null, this.pan = null, this.volume = null, this
        }, t.PanVol
    }), Module(function(t) {
        return t.ScaledEnvelope = function() {
            var e = this.optionsObject(arguments, ["attack", "decay", "sustain", "release"], t.Envelope.defaults);
            t.Envelope.call(this, e), e = this.defaultArg(e, t.ScaledEnvelope.defaults), this._exp = this.output = new t.Pow(e.exponent), this._scale = this.output = new t.Scale(e.min, e.max), this._sig.chain(this._exp, this._scale)
        }, t.extend(t.ScaledEnvelope, t.Envelope), t.ScaledEnvelope.defaults = {
            min: 0,
            max: 1,
            exponent: 1
        }, Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
            get: function() {
                return this._scale.min
            },
            set: function(t) {
                this._scale.min = t
            }
        }), Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
            get: function() {
                return this._scale.max
            },
            set: function(t) {
                this._scale.max = t
            }
        }), Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
            get: function() {
                return this._exp.value
            },
            set: function(t) {
                this._exp.value = t
            }
        }), t.ScaledEnvelope.prototype.dispose = function() {
            return t.Envelope.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this
        }, t.ScaledEnvelope
    }), Module(function(t) {
        return t.Buffer = function() {
            var e = this.optionsObject(arguments, ["url", "onload"], t.Buffer.defaults);
            this._buffer = null, this._reversed = e.reverse, this.url = void 0, this.loaded = !1, this.onload = e.onload.bind(this, this), e.url instanceof AudioBuffer ? (this._buffer.set(e.url), this.onload(this)) : "string" == typeof e.url && (this.url = e.url, t.Buffer._addToQueue(e.url, this))
        }, t.extend(t.Buffer), t.Buffer.defaults = {
            url: void 0,
            onload: t.noOp,
            reverse: !1
        }, t.Buffer.prototype.set = function(e) {
            return this._buffer = e instanceof t.Buffer ? e.get() : e, this.loaded = !0, this
        }, t.Buffer.prototype.get = function() {
            return this._buffer
        }, t.Buffer.prototype.load = function(e, i) {
            return this.url = e, this.onload = this.defaultArg(i, this.onload), t.Buffer._addToQueue(e, this), this
        }, t.Buffer.prototype.dispose = function() {
            return t.prototype.dispose.call(this), t.Buffer._removeFromQueue(this), this._buffer = null, this.onload = t.Buffer.defaults.onload, this
        }, Object.defineProperty(t.Buffer.prototype, "duration", {
            get: function() {
                return this._buffer ? this._buffer.duration : 0
            }
        }), t.Buffer.prototype._reverse = function() {
            if (this.loaded)
                for (var t = 0; t < this._buffer.numberOfChannels; t++) Array.prototype.reverse.call(this._buffer.getChannelData(t));
            return this
        }, Object.defineProperty(t.Buffer.prototype, "reverse", {
            get: function() {
                return this._reversed
            },
            set: function(t) {
                this._reversed !== t && (this._reversed = t, this._reverse())
            }
        }), t.Buffer._queue = [], t.Buffer._currentDownloads = [], t.Buffer._totalDownloads = 0, t.Buffer.MAX_SIMULTANEOUS_DOWNLOADS = 6, t.Buffer._addToQueue = function(e, i) {
            t.Buffer._queue.push({
                url: e,
                Buffer: i,
                progress: 0,
                xhr: null
            }), this._totalDownloads++, t.Buffer._next()
        }, t.Buffer._removeFromQueue = function(e) {
            var i, s, n;
            for (i = 0; i < t.Buffer._queue.length; i++) s = t.Buffer._queue[i], s.Buffer === e && t.Buffer._queue.splice(i, 1);
            for (i = 0; i < t.Buffer._currentDownloads.length; i++) n = t.Buffer._currentDownloads[i], n.Buffer === e && (t.Buffer._currentDownloads.splice(i, 1), n.xhr.abort(), n.xhr.onprogress = null, n.xhr.onload = null, n.xhr.onerror = null)
        }, t.Buffer._next = function() {
            if (t.Buffer._queue.length > 0) {
                if (t.Buffer._currentDownloads.length < t.Buffer.MAX_SIMULTANEOUS_DOWNLOADS) {
                    var e = t.Buffer._queue.shift();
                    t.Buffer._currentDownloads.push(e), e.xhr = t.Buffer.load(e.url, function(i) {
                        var s = t.Buffer._currentDownloads.indexOf(e);
                        t.Buffer._currentDownloads.splice(s, 1), e.Buffer.set(i), e.Buffer._reversed && e.Buffer._reverse(), e.Buffer.onload(e.Buffer), t.Buffer._onprogress(), t.Buffer._next()
                    })
                      // ?
                      /*
                      e.xhr.onprogress = function(i) {
                        e.progress = i.loaded / i.total, t.Buffer._onprogress()
                      },
                      */                      
                      //e.xhr.onerror = t.Buffer.onerror
                      // ?
                }
            } else 0 === t.Buffer._currentDownloads.length && (t.Buffer.onload(), t.Buffer._totalDownloads = 0)
        }, t.Buffer._onprogress = function() {
            var e, i, s, n, o = 0,
                r = t.Buffer._currentDownloads.length,
                l = 0;
            if (r > 0) {
                for (e = 0; r > e; e++) i = t.Buffer._currentDownloads[e], o += i.progress;
                l = o
            }
            s = r - l, n = t.Buffer._totalDownloads - t.Buffer._queue.length - s, t.Buffer.onprogress(n / t.Buffer._totalDownloads)
        }, t.Buffer.load = function(e, i) {
            // ?  
            /*
            console.log('A')
            var s = new XMLHttpRequest;
            return s.open("GET", e, !0), s.responseType = "arraybuffer", s.onload = function() {
              console.log('B',s.response)
                t.context.decodeAudioData(s.response, function(t) {
                    if (!t) throw new Error("could not decode audio data:" + e);
                    i(t)
                })
            }, 
            s.send(), 
            s
            */
            // ?   /*
            var mp3 = Base64Binary.decodeArrayBuffer(mp3_binary)
            t.context.decodeAudioData(mp3, function(t) {
                if (!t) throw new Error("could not decode audio data:" + e);
                i(t)
            })
            
            // ? */
        }, t.Buffer.onload = t.noOp, t.Buffer.onprogress = t.noOp, t.Buffer.onerror = t.noOp, t.Buffer
    }), Module(function(t) {
        var e = {};
        return t.prototype.send = function(t, i) {
            e.hasOwnProperty(t) || (e[t] = this.context.createGain());
            var s = this.context.createGain();
            return s.gain.value = this.dbToGain(this.defaultArg(i, 1)), this.output.chain(s, e[t]), s
        }, t.prototype.receive = function(t, i) {
            return e.hasOwnProperty(t) || (e[t] = this.context.createGain()), this.isUndef(i) && (i = this.input), e[t].connect(i), this
        }, t
    }), Module(function(t) {
        function e(t, e, s) {
            var n, o, r, l;
            if (i.hasOwnProperty(t))
                for (n = i[t], o = 0, r = n.length; r > o; o++) l = n[o], Array.isArray(s) ? l.apply(window, [e].concat(s)) : l(e, s)
        }
        var i, s, n, o;
        return t.Note = function(e, i, s) {
            this.value = s, this._channel = e, this._timelineID = t.Transport.setTimeline(this._trigger.bind(this), i)
        }, t.Note.prototype._trigger = function(t) {
            e(this._channel, t, this.value)
        }, t.Note.prototype.dispose = function() {
            return t.Tranport.clearTimeline(this._timelineID), this.value = null, this
        }, i = {}, t.Note.route = function(t, e) {
            i.hasOwnProperty(t) ? i[t].push(e) : i[t] = [e]
        }, t.Note.unroute = function(t, e) {
            var s, n;
            i.hasOwnProperty(t) && (s = i[t], n = s.indexOf(e), -1 !== n && i[t].splice(n, 1))
        }, t.Note.parseScore = function(e) {
            var i, s, n, o, r, l, a, h = [];
            for (i in e)
                if (s = e[i], "tempo" === i) t.Transport.bpm.value = s;
                else if ("timeSignature" === i) t.Transport.timeSignature = s[0] / (s[1] / 4);
            else {
                if (!Array.isArray(s)) throw new TypeError("score parts must be Arrays");
                for (n = 0; n < s.length; n++) o = s[n], Array.isArray(o) ? (l = o[0], a = o.slice(1), r = new t.Note(i, l, a)) : r = new t.Note(i, o), h.push(r)
            }
            return h
        }, s = {
            c: 0,
            "c#": 1,
            db: 1,
            d: 2,
            "d#": 3,
            eb: 3,
            e: 4,
            f: 5,
            "f#": 6,
            gb: 6,
            g: 7,
            "g#": 8,
            ab: 8,
            a: 9,
            "a#": 10,
            bb: 10,
            b: 11
        }, n = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], o = 261.6255653005986, t.prototype.noteToFrequency = function(t) {
            var e, i, n, r = t.split(/(\d+)/);
            return 3 === r.length ? (e = s[r[0].toLowerCase()], i = r[1], n = e + 12 * parseInt(i, 10), Math.pow(2, (n - 48) / 12) * o) : 0
        }, t.prototype.isNote = function() {
            var t = new RegExp(/[a-g]{1}([b#]{1}|[b#]{0})[0-9]+$/i);
            return function(e) {
                return "string" == typeof e && (e = e.toLowerCase()), t.test(e)
            }
        }(), t.prototype._overwrittenToFrequency = t.prototype.toFrequency, t.prototype.toFrequency = function(t, e) {
            return this.isNote(t) && (t = this.noteToFrequency(t)), this._overwrittenToFrequency(t, e)
        }, t.prototype.frequencyToNote = function(t) {
            var e = Math.log(t / o) / Math.LN2,
                i = Math.round(12 * e) + 48,
                s = Math.floor(i / 12),
                r = n[i % 12];
            return r + s.toString()
        }, t.prototype.intervalToFrequencyRatio = function(t) {
            return Math.pow(2, t / 12)
        }, t.prototype.midiToNote = function(t) {
            var e = Math.floor(t / 12) - 2,
                i = t % 12;
            return n[i] + e
        }, t.prototype.noteToMidi = function(t) {
            var e, i, n = t.split(/(\d+)/);
            return 3 === n.length ? (e = s[n[0].toLowerCase()], i = n[1], e + 12 * (parseInt(i, 10) + 2)) : 0
        }, t.Note
    }), Module(function(t) {
        return t.PulseOscillator = function() {
            var e = this.optionsObject(arguments, ["frequency", "width"], t.Oscillator.defaults);
            t.Source.call(this, e), this.width = new t.Signal(e.width, t.Type.NormalRange), this._widthGate = this.context.createGain(), this._sawtooth = new t.Oscillator({
                frequency: e.frequency,
                detune: e.detune,
                type: "sawtooth",
                phase: e.phase
            }), this.frequency = this._sawtooth.frequency, this.detune = this._sawtooth.detune, this._thresh = new t.WaveShaper(function(t) {
                return 0 > t ? -1 : 1
            }), this._sawtooth.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), this._readOnly(["width", "frequency", "detune"])
        }, t.extend(t.PulseOscillator, t.Oscillator), t.PulseOscillator.defaults = {
            frequency: 440,
            detune: 0,
            phase: 0,
            width: .2
        }, t.PulseOscillator.prototype._start = function(t) {
            t = this.toSeconds(t), this._sawtooth.start(t), this._widthGate.gain.setValueAtTime(1, t)
        }, t.PulseOscillator.prototype._stop = function(t) {
            t = this.toSeconds(t), this._sawtooth.stop(t), this._widthGate.gain.setValueAtTime(0, t)
        }, Object.defineProperty(t.PulseOscillator.prototype, "phase", {
            get: function() {
                return this._sawtooth.phase
            },
            set: function(t) {
                this._sawtooth.phase = t
            }
        }), Object.defineProperty(t.PulseOscillator.prototype, "type", {
            get: function() {
                return "pulse"
            }
        }), t.PulseOscillator.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), this._sawtooth.dispose(), this._sawtooth = null, this._writable(["width", "frequency", "detune"]), this.width.dispose(), this.width = null, this._widthGate.disconnect(), this._widthGate = null, this._widthGate = null, this._thresh.disconnect(), this._thresh = null, this.frequency = null, this.detune = null, this
        }, t.PulseOscillator
    }), Module(function(t) {
        return t.PWMOscillator = function() {
            var e = this.optionsObject(arguments, ["frequency", "modulationFrequency"], t.PWMOscillator.defaults);
            t.Source.call(this, e), this._pulse = new t.PulseOscillator(e.modulationFrequency), this._pulse._sawtooth.type = "sine", this._modulator = new t.Oscillator({
                frequency: e.frequency,
                detune: e.detune
            }), this._scale = new t.Multiply(1.01), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this.modulationFrequency = this._pulse.frequency, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), this._readOnly(["modulationFrequency", "frequency", "detune"])
        }, t.extend(t.PWMOscillator, t.Oscillator), t.PWMOscillator.defaults = {
            frequency: 440,
            detune: 0,
            modulationFrequency: .4
        }, t.PWMOscillator.prototype._start = function(t) {
            t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t)
        }, t.PWMOscillator.prototype._stop = function(t) {
            t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t)
        }, Object.defineProperty(t.PWMOscillator.prototype, "type", {
            get: function() {
                return "pwm"
            }
        }), Object.defineProperty(t.PWMOscillator.prototype, "phase", {
            get: function() {
                return this._modulator.phase
            },
            set: function(t) {
                this._modulator.phase = t
            }
        }), t.PWMOscillator.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), this._pulse.dispose(), this._pulse = null, this._scale.dispose(), this._scale = null, this._modulator.dispose(), this._modulator = null, this._writable(["modulationFrequency", "frequency", "detune"]), this.frequency = null, this.detune = null, this.modulationFrequency = null, this
        }, t.PWMOscillator
    }), Module(function(t) {
        t.OmniOscillator = function() {
            var e = this.optionsObject(arguments, ["frequency", "type"], t.OmniOscillator.defaults);
            t.Source.call(this, e), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._sourceType = void 0, this._oscillator = null, this.type = e.type, this._readOnly(["frequency", "detune"])
        }, t.extend(t.OmniOscillator, t.Oscillator), t.OmniOscillator.defaults = {
            frequency: 440,
            detune: 0,
            type: "sine",
            width: .4,
            modulationFrequency: .4
        };
        var e = {
            PulseOscillator: "PulseOscillator",
            PWMOscillator: "PWMOscillator",
            Oscillator: "Oscillator"
        };
        return t.OmniOscillator.prototype._start = function(t) {
            this._oscillator.start(t)
        }, t.OmniOscillator.prototype._stop = function(t) {
            this._oscillator.stop(t)
        }, Object.defineProperty(t.OmniOscillator.prototype, "type", {
            get: function() {
                return this._oscillator.type
            },
            set: function(i) {
                if (0 === i.indexOf("sine") || 0 === i.indexOf("square") || 0 === i.indexOf("triangle") || 0 === i.indexOf("sawtooth")) this._sourceType !== e.Oscillator && (this._sourceType = e.Oscillator, this._createNewOscillator(t.Oscillator)), this._oscillator.type = i;
                else if ("pwm" === i) this._sourceType !== e.PWMOscillator && (this._sourceType = e.PWMOscillator, this._createNewOscillator(t.PWMOscillator));
                else {
                    if ("pulse" !== i) throw new TypeError("Tone.OmniOscillator does not support type " + i);
                    this._sourceType !== e.PulseOscillator && (this._sourceType = e.PulseOscillator, this._createNewOscillator(t.PulseOscillator))
                }
            }
        }), t.OmniOscillator.prototype._createNewOscillator = function(e) {
            var i, s = this.now() + this.bufferTime;
            null !== this._oscillator && (i = this._oscillator, i.stop(s), i.onended = function() {
                i.dispose(), i = null
            }), this._oscillator = new e, this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this.state === t.State.Started && this._oscillator.start(s)
        }, Object.defineProperty(t.OmniOscillator.prototype, "phase", {
            get: function() {
                return this._oscillator.phase
            },
            set: function(t) {
                this._oscillator.phase = t
            }
        }), Object.defineProperty(t.OmniOscillator.prototype, "width", {
            get: function() {
                return this._sourceType === e.PulseOscillator ? this._oscillator.width : void 0
            }
        }), Object.defineProperty(t.OmniOscillator.prototype, "modulationFrequency", {
            get: function() {
                return this._sourceType === e.PWMOscillator ? this._oscillator.modulationFrequency : void 0
            }
        }), t.OmniOscillator.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.detune.dispose(), this.detune = null, this.frequency.dispose(), this.frequency = null, this._oscillator.dispose(), this._oscillator = null, this._sourceType = null, this
        }, t.OmniOscillator
    }), Module(function(t) {
        return t.Instrument = function(e) {
            e = this.defaultArg(e, t.Instrument.defaults), this.output = this.context.createGain(), this.volume = new t.Signal({
                param: this.output.gain,
                units: t.Type.Decibels,
                value: e.volume
            }), this._readOnly(["volume"])
        }, t.extend(t.Instrument), t.Instrument.defaults = {
            volume: 0
        }, t.Instrument.prototype.triggerAttack = t.noOp, t.Instrument.prototype.triggerRelease = t.noOp, t.Instrument.prototype.triggerAttackRelease = function(t, e, i, s) {
            return i = this.toSeconds(i), e = this.toSeconds(e), this.triggerAttack(t, i, s), this.triggerRelease(i + e), this
        }, t.Instrument.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable(["volume"]), this.volume.dispose(), this.volume = null, this
        }, t.Instrument
    }), Module(function(t) {
        return t.Monophonic = function(e) {
            e = this.defaultArg(e, t.Monophonic.defaults), t.Instrument.call(this, e), this.portamento = e.portamento
        }, t.extend(t.Monophonic, t.Instrument), t.Monophonic.defaults = {
            portamento: 0
        }, t.Monophonic.prototype.triggerAttack = function(t, e, i) {
            return e = this.toSeconds(e), this._triggerEnvelopeAttack(e, i), this.setNote(t, e), this
        }, t.Monophonic.prototype.triggerRelease = function(t) {
            return this._triggerEnvelopeRelease(t), this
        }, t.Monophonic.prototype._triggerEnvelopeAttack = function() {}, t.Monophonic.prototype._triggerEnvelopeRelease = function() {}, t.Monophonic.prototype.setNote = function(t, e) {
            var i, s;
            return e = this.toSeconds(e), this.portamento > 0 ? (i = this.frequency.value, this.frequency.setValueAtTime(i, e), s = this.toSeconds(this.portamento), this.frequency.exponentialRampToValueAtTime(t, e + s)) : this.frequency.setValueAtTime(t, e), this
        }, t.Monophonic
    }), Module(function(t) {
        return t.MonoSynth = function(e) {
            e = this.defaultArg(e, t.MonoSynth.defaults), t.Monophonic.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new t.Filter(e.filter), this.filterEnvelope = new t.ScaledEnvelope(e.filterEnvelope), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.oscillator.chain(this.filter, this.envelope, this.output), this.oscillator.start(), this.filterEnvelope.connect(this.filter.frequency), this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"])
        }, t.extend(t.MonoSynth, t.Monophonic), t.MonoSynth.defaults = {
            frequency: "C4",
            detune: 0,
            oscillator: {
                type: "square"
            },
            filter: {
                Q: 6,
                type: "lowpass",
                rolloff: -24
            },
            envelope: {
                attack: .005,
                decay: .1,
                sustain: .9,
                release: 1
            },
            filterEnvelope: {
                attack: .06,
                decay: .2,
                sustain: .5,
                release: 2,
                min: 20,
                max: 4e3,
                exponent: 2
            }
        }, t.MonoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
            return this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this
        }, t.MonoSynth.prototype._triggerEnvelopeRelease = function(t) {
            return this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this
        }, t.MonoSynth.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.filterEnvelope.dispose(), this.filterEnvelope = null, this.filter.dispose(), this.filter = null, this.frequency = null, this.detune = null, this
        }, t.MonoSynth
    }), Module(function(t) {
        return t.AMSynth = function(e) {
            e = this.defaultArg(e, t.AMSynth.defaults), t.Monophonic.call(this, e), this.carrier = new t.MonoSynth(e.carrier), this.carrier.volume.value = -10, this.modulator = new t.MonoSynth(e.modulator), this.modulator.volume.value = -10, this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationScale = new t.AudioToGain, this._modulationNode = this.context.createGain(), this.frequency.connect(this.carrier.frequency), this.frequency.chain(this.harmonicity, this.modulator.frequency), this.modulator.chain(this._modulationScale, this._modulationNode.gain), this.carrier.chain(this._modulationNode, this.output), this._readOnly(["carrier", "modulator", "frequency", "harmonicity"])
        }, t.extend(t.AMSynth, t.Monophonic), t.AMSynth.defaults = {
            harmonicity: 3,
            carrier: {
                volume: -10,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: .01,
                    sustain: 1,
                    release: .5
                },
                filterEnvelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5,
                    min: 2e4,
                    max: 2e4
                },
                filter: {
                    Q: 6,
                    type: "lowpass",
                    rolloff: -24
                }
            },
            modulator: {
                volume: -10,
                oscillator: {
                    type: "square"
                },
                envelope: {
                    attack: 2,
                    decay: 0,
                    sustain: 1,
                    release: .5
                },
                filterEnvelope: {
                    attack: 4,
                    decay: .2,
                    sustain: .5,
                    release: .5,
                    min: 20,
                    max: 1500
                },
                filter: {
                    Q: 6,
                    type: "lowpass",
                    rolloff: -24
                }
            }
        }, t.AMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
            return t = this.toSeconds(t), this.carrier.envelope.triggerAttack(t, e), this.modulator.envelope.triggerAttack(t), this.carrier.filterEnvelope.triggerAttack(t), this.modulator.filterEnvelope.triggerAttack(t), this
        }, t.AMSynth.prototype._triggerEnvelopeRelease = function(t) {
            return this.carrier.triggerRelease(t), this.modulator.triggerRelease(t), this
        }, t.AMSynth.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["carrier", "modulator", "frequency", "harmonicity"]), this.carrier.dispose(), this.carrier = null, this.modulator.dispose(), this.modulator = null, this.frequency.dispose(), this.frequency = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationScale.dispose(), this._modulationScale = null, this._modulationNode.disconnect(), this._modulationNode = null, this
        }, t.AMSynth
    }), Module(function(t) {
        return t.DrumSynth = function(e) {
            e = this.defaultArg(e, t.DrumSynth.defaults), t.Instrument.call(this, e), this.oscillator = new t.Oscillator(e.oscillator).start(), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.octaves = e.octaves, this.pitchDecay = e.pitchDecay, this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "envelope"])
        }, t.extend(t.DrumSynth, t.Instrument), t.DrumSynth.defaults = {
            pitchDecay: .05,
            octaves: 10,
            oscillator: {
                type: "sine"
            },
            envelope: {
                attack: .001,
                decay: .4,
                sustain: .01,
                release: 1.4,
                attackCurve: "exponential"
            }
        }, t.DrumSynth.prototype.triggerAttack = function(t, e, i) {
            e = this.toSeconds(e), t = this.toFrequency(t);
            var s = t * this.octaves;
            return this.oscillator.frequency.setValueAtTime(s, e), this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)), this.envelope.triggerAttack(e, i), this
        }, t.DrumSynth.prototype.triggerRelease = function(t) {
            return this.envelope.triggerRelease(t), this
        }, t.DrumSynth.prototype.dispose = function() {
            return t.Instrument.prototype.dispose.call(this), this._writable(["oscillator", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this
        }, t.DrumSynth
    }), Module(function(t) {
        return t.DuoSynth = function(e) {
            e = this.defaultArg(e, t.DuoSynth.defaults), t.Monophonic.call(this, e), this.voice0 = new t.MonoSynth(e.voice0), this.voice0.volume.value = -10, this.voice1 = new t.MonoSynth(e.voice1), this.voice1.volume.value = -10, this._vibrato = new t.LFO(e.vibratoRate, -50, 50), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = this.context.createGain(), this.vibratoAmount = new t.Signal(this._vibratoGain.gain, t.Type.Gain), this.vibratoAmount.value = e.vibratoAmount, this._vibratoDelay = this.toSeconds(e.vibratoDelay), this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"])
        }, t.extend(t.DuoSynth, t.Monophonic), t.DuoSynth.defaults = {
            vibratoAmount: .5,
            vibratoRate: 5,
            vibratoDelay: 1,
            harmonicity: 1.5,
            voice0: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "sine"
                },
                filterEnvelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                },
                envelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            },
            voice1: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "sine"
                },
                filterEnvelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                },
                envelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            }
        }, t.DuoSynth.prototype._triggerEnvelopeAttack = function(t, e) {
            return t = this.toSeconds(t), this.voice0.envelope.triggerAttack(t, e), this.voice1.envelope.triggerAttack(t, e), this.voice0.filterEnvelope.triggerAttack(t), this.voice1.filterEnvelope.triggerAttack(t), this
        }, t.DuoSynth.prototype._triggerEnvelopeRelease = function(t) {
            return this.voice0.triggerRelease(t), this.voice1.triggerRelease(t), this
        }, t.DuoSynth.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]), this.voice0.dispose(), this.voice0 = null, this.voice1.dispose(), this.voice1 = null, this.frequency.dispose(), this.frequency = null, this._vibrato.dispose(), this._vibrato = null, this._vibratoGain.disconnect(), this._vibratoGain = null,
                this.harmonicity.dispose(), this.harmonicity = null, this.vibratoAmount.dispose(), this.vibratoAmount = null, this.vibratoRate = null, this
        }, t.DuoSynth
    }), Module(function(t) {
        return t.FMSynth = function(e) {
            e = this.defaultArg(e, t.FMSynth.defaults), t.Monophonic.call(this, e), this.carrier = new t.MonoSynth(e.carrier), this.carrier.volume.value = -10, this.modulator = new t.MonoSynth(e.modulator), this.modulator.volume.value = -10, this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.modulationIndex = new t.Multiply(e.modulationIndex), this.modulationIndex.units = t.Type.Positive, this._modulationNode = this.context.createGain(), this.frequency.connect(this.carrier.frequency), this.frequency.chain(this.harmonicity, this.modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.modulator.connect(this._modulationNode.gain), this._modulationNode.gain.value = 0, this._modulationNode.connect(this.carrier.frequency), this.carrier.connect(this.output), this._readOnly(["carrier", "modulator", "frequency", "harmonicity", "modulationIndex"])
        }, t.extend(t.FMSynth, t.Monophonic), t.FMSynth.defaults = {
            harmonicity: 3,
            modulationIndex: 10,
            carrier: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                },
                filterEnvelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5,
                    min: 2e4,
                    max: 2e4
                }
            },
            modulator: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "triangle"
                },
                envelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                },
                filterEnvelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5,
                    min: 2e4,
                    max: 2e4
                }
            }
        }, t.FMSynth.prototype._triggerEnvelopeAttack = function(t, e) {
            return t = this.toSeconds(t), this.carrier.envelope.triggerAttack(t, e), this.modulator.envelope.triggerAttack(t), this.carrier.filterEnvelope.triggerAttack(t), this.modulator.filterEnvelope.triggerAttack(t), this
        }, t.FMSynth.prototype._triggerEnvelopeRelease = function(t) {
            return this.carrier.triggerRelease(t), this.modulator.triggerRelease(t), this
        }, t.FMSynth.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["carrier", "modulator", "frequency", "harmonicity", "modulationIndex"]), this.carrier.dispose(), this.carrier = null, this.modulator.dispose(), this.modulator = null, this.frequency.dispose(), this.frequency = null, this.modulationIndex.dispose(), this.modulationIndex = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationNode.disconnect(), this._modulationNode = null, this
        }, t.FMSynth
    }), Module(function(t) {
        t.Noise = function() {
            var e = this.optionsObject(arguments, ["type"], t.Noise.defaults);
            t.Source.call(this, e), this._source = null, this._buffer = null, this.type = e.type
        }, t.extend(t.Noise, t.Source), t.Noise.defaults = {
            type: "white"
        }, Object.defineProperty(t.Noise.prototype, "type", {
            get: function() {
                return this._buffer === s ? "white" : this._buffer === i ? "brown" : this._buffer === e ? "pink" : void 0
            },
            set: function(n) {
                if (this.type !== n) {
                    switch (n) {
                        case "white":
                            this._buffer = s;
                            break;
                        case "pink":
                            this._buffer = e;
                            break;
                        case "brown":
                            this._buffer = i;
                            break;
                        default:
                            this._buffer = s
                    }
                    if (this.state === t.State.Started) {
                        var o = this.now() + this.bufferTime;
                        this._source.onended = void 0, this._stop(o), this._start(o)
                    }
                }
            }
        }), t.Noise.prototype._start = function(t) {
            this._source = this.context.createBufferSource(), this._source.buffer = this._buffer, this._source.loop = !0, this.connectSeries(this._source, this.output), this._source.start(this.toSeconds(t)), this._source.onended = this.onended
        }, t.Noise.prototype._stop = function(t) {
            this._source && this._source.stop(this.toSeconds(t))
        }, t.Noise.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), this._source = null), this._buffer = null, this
        };
        var e = null,
            i = null,
            s = null;
        return t._initAudioContext(function(t) {
            var n = t.sampleRate,
                o = 4 * n;
            e = function() {
                var e, i, s, r, l, a, h, u, c, p, d, f = t.createBuffer(2, o, n);
                for (e = 0; e < f.numberOfChannels; e++)
                    for (i = f.getChannelData(e), s = r = l = a = h = u = c = 0, p = 0; o > p; p++) d = 2 * Math.random() - 1, s = .99886 * s + .0555179 * d, r = .99332 * r + .0750759 * d, l = .969 * l + .153852 * d, a = .8665 * a + .3104856 * d, h = .55 * h + .5329522 * d, u = -.7616 * u - .016898 * d, i[p] = s + r + l + a + h + u + c + .5362 * d, i[p] *= .11, c = .115926 * d;
                return f
            }(), i = function() {
                var e, i, s, r, l, a = t.createBuffer(2, o, n);
                for (e = 0; e < a.numberOfChannels; e++)
                    for (i = a.getChannelData(e), s = 0, r = 0; o > r; r++) l = 2 * Math.random() - 1, i[r] = (s + .02 * l) / 1.02, s = i[r], i[r] *= 3.5;
                return a
            }(), s = function() {
                var e, i, s, r = t.createBuffer(2, o, n);
                for (e = 0; e < r.numberOfChannels; e++)
                    for (i = r.getChannelData(e), s = 0; o > s; s++) i[s] = 2 * Math.random() - 1;
                return r
            }()
        }), t.Noise
    }), Module(function(t) {
        return t.NoiseSynth = function(e) {
            e = this.defaultArg(e, t.NoiseSynth.defaults), t.Instrument.call(this, e), this.noise = new t.Noise, this.filter = new t.Filter(e.filter), this.filterEnvelope = new t.ScaledEnvelope(e.filterEnvelope), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.noise.chain(this.filter, this.envelope, this.output), this.noise.start(), this.filterEnvelope.connect(this.filter.frequency), this._readOnly(["noise", "filter", "filterEnvelope", "envelope"])
        }, t.extend(t.NoiseSynth, t.Instrument), t.NoiseSynth.defaults = {
            noise: {
                type: "white"
            },
            filter: {
                Q: 6,
                type: "highpass",
                rolloff: -24
            },
            envelope: {
                attack: .005,
                decay: .1,
                sustain: 0
            },
            filterEnvelope: {
                attack: .06,
                decay: .2,
                sustain: 0,
                release: 2,
                min: 20,
                max: 4e3,
                exponent: 2
            }
        }, t.NoiseSynth.prototype.triggerAttack = function(t, e) {
            return this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this
        }, t.NoiseSynth.prototype.triggerRelease = function(t) {
            return this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this
        }, t.NoiseSynth.prototype.triggerAttackRelease = function(t, e, i) {
            return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, i), this.triggerRelease(e + t), this
        }, t.NoiseSynth.prototype.dispose = function() {
            return t.Instrument.prototype.dispose.call(this), this._writable(["noise", "filter", "filterEnvelope", "envelope"]), this.noise.dispose(), this.noise = null, this.envelope.dispose(), this.envelope = null, this.filterEnvelope.dispose(), this.filterEnvelope = null, this.filter.dispose(), this.filter = null, this
        }, t.NoiseSynth
    }), Module(function(t) {
        return t.PluckSynth = function(e) {
            e = this.defaultArg(e, t.PluckSynth.defaults), t.Instrument.call(this, e), this._noise = new t.Noise("pink"), this.attackNoise = 1, this._lfcf = new t.LowpassCombFilter({
                resonance: e.resonance,
                dampening: e.dampening
            }), this.resonance = this._lfcf.resonance, this.dampening = this._lfcf.dampening, this._noise.connect(this._lfcf), this._lfcf.connect(this.output), this._readOnly(["resonance", "dampening"])
        }, t.extend(t.PluckSynth, t.Instrument), t.PluckSynth.defaults = {
            attackNoise: 1,
            dampening: 4e3,
            resonance: .9
        }, t.PluckSynth.prototype.triggerAttack = function(t, e) {
            t = this.toFrequency(t), e = this.toSeconds(e);
            var i = 1 / t;
            return this._lfcf.delayTime.setValueAtTime(i, e), this._noise.start(e), this._noise.stop(e + i * this.attackNoise), this
        }, t.PluckSynth.prototype.dispose = function() {
            return t.Instrument.prototype.dispose.call(this), this._noise.dispose(), this._lfcf.dispose(), this._noise = null, this._lfcf = null, this._writable(["resonance", "dampening"]), this.dampening = null, this.resonance = null, this
        }, t.PluckSynth
    }), Module(function(t) {
        return t.PolySynth = function() {
            var e, i, s;
            for (t.Instrument.call(this), e = this.optionsObject(arguments, ["polyphony", "voice"], t.PolySynth.defaults), this.voices = new Array(e.polyphony), this._freeVoices = [], this._activeVoices = {}, i = 0; i < e.polyphony; i++) s = new e.voice(arguments[2], arguments[3]), this.voices[i] = s, s.connect(this.output);
            this._freeVoices = this.voices.slice(0)
        }, t.extend(t.PolySynth, t.Instrument), t.PolySynth.defaults = {
            polyphony: 4,
            voice: t.MonoSynth
        }, t.PolySynth.prototype.triggerAttack = function(t, e, i) {
            var s, n, o, r;
            for (Array.isArray(t) || (t = [t]), s = 0; s < t.length; s++) n = t[s], o = JSON.stringify(n), this._activeVoices[o] ? this._activeVoices[o].triggerAttack(n, e, i) : this._freeVoices.length > 0 && (r = this._freeVoices.shift(), r.triggerAttack(n, e, i), this._activeVoices[o] = r);
            return this
        }, t.PolySynth.prototype.triggerAttackRelease = function(t, e, i, s) {
            return i = this.toSeconds(i), this.triggerAttack(t, i, s), this.triggerRelease(t, i + this.toSeconds(e)), this
        }, t.PolySynth.prototype.triggerRelease = function(t, e) {
            var i, s, n;
            for (Array.isArray(t) || (t = [t]), i = 0; i < t.length; i++) s = JSON.stringify(t[i]), n = this._activeVoices[s], n && (n.triggerRelease(e), this._freeVoices.push(n), delete this._activeVoices[s], n = null);
            return this
        }, t.PolySynth.prototype.set = function(t, e, i) {
            for (var s = 0; s < this.voices.length; s++) this.voices[s].set(t, e, i);
            return this
        }, t.PolySynth.prototype.get = function(t) {
            return this.voices[0].get(t)
        }, t.PolySynth.prototype.setPreset = function(t) {
            for (var e = 0; e < this.voices.length; e++) this.voices[e].setPreset(t);
            return this
        }, t.PolySynth.prototype.dispose = function() {
            t.Instrument.prototype.dispose.call(this);
            for (var e = 0; e < this.voices.length; e++) this.voices[e].dispose(), this.voices[e] = null;
            return this.voices = null, this._activeVoices = null, this._freeVoices = null, this
        }, t.PolySynth
    }), Module(function(t) {
        return t.Player = function() {
            var e = this.optionsObject(arguments, ["url", "onload"], t.Player.defaults);
            t.Source.call(this, e), this._source = null, this.autostart = e.autostart, this._buffer = new t.Buffer({
                url: e.url,
                onload: this._onload.bind(this, e.onload),
                reverse: e.reverse
            }), this._loop = e.loop, this._loopStart = e.loopStart, this._loopEnd = e.loopEnd, this._playbackRate = e.playbackRate, this.retrigger = e.retrigger
        }, t.extend(t.Player, t.Source), t.Player.defaults = {
            onload: t.noOp,
            playbackRate: 1,
            loop: !1,
            autostart: !1,
            loopStart: 0,
            loopEnd: 0,
            retrigger: !1,
            reverse: !1
        }, t.Player.prototype.load = function(t, e) {
            return this._buffer.load(t, this._onload.bind(this, e)), this
        }, t.Player.prototype._onload = function(t) {
            t(this), this.autostart && this.start()
        }, t.Player.prototype._start = function(t, e, i) {
            if (!this._buffer.loaded) throw Error("tried to start Player before the buffer was loaded");
            return e = this._loop ? this.defaultArg(e, this._loopStart) : this.defaultArg(e, 0), e = this.toSeconds(e), i = this.defaultArg(i, this._buffer.duration - e), t = this.toSeconds(t), i = this.toSeconds(i), this._source = this.context.createBufferSource(), this._source.buffer = this._buffer.get(), this._loop ? (this._source.loop = this._loop, this._source.loopStart = this.toSeconds(this._loopStart), this._source.loopEnd = this.toSeconds(this._loopEnd), i = 65536) : this._nextStop = t + i, this._source.playbackRate.value = this._playbackRate, this._source.onended = this.onended, this._source.connect(this.output), this._source.start(t, e, i), this
        }, t.Player.prototype._stop = function(t) {
            return this._source && (this._source.stop(this.toSeconds(t)), this._source = null), this
        }, t.Player.prototype.setLoopPoints = function(t, e) {
            return this.loopStart = t, this.loopEnd = e, this
        }, Object.defineProperty(t.Player.prototype, "loopStart", {
            get: function() {
                return this._loopStart
            },
            set: function(t) {
                this._loopStart = t, this._source && (this._source.loopStart = this.toSeconds(t))
            }
        }), Object.defineProperty(t.Player.prototype, "loopEnd", {
            get: function() {
                return this._loopEnd
            },
            set: function(t) {
                this._loopEnd = t, this._source && (this._source.loopEnd = this.toSeconds(t))
            }
        }), Object.defineProperty(t.Player.prototype, "buffer", {
            get: function() {
                return this._buffer
            },
            set: function(t) {
                this._buffer.set(t)
            }
        }), Object.defineProperty(t.Player.prototype, "loop", {
            get: function() {
                return this._loop
            },
            set: function(t) {
                this._loop = t, this._source && (this._source.loop = t)
            }
        }), Object.defineProperty(t.Player.prototype, "playbackRate", {
            get: function() {
                return this._playbackRate
            },
            set: function(t) {
                this._playbackRate = t, this._source && (this._source.playbackRate.value = t)
            }
        }), Object.defineProperty(t.Player.prototype, "reverse", {
            get: function() {
                return this._buffer.reverse
            },
            set: function(t) {
                this._buffer.reverse = t
            }
        }), t.Player.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), this._source = null), this._buffer.dispose(), this._buffer = null, this
        }, t.Player
    }), Module(function(t) {
        return t.Sampler = function(e, i) {
            i = this.defaultArg(i, t.Sampler.defaults), t.Instrument.call(this, i), this.player = new t.Player(i.player), this.player.retrigger = !0, this._buffers = {}, this.envelope = new t.AmplitudeEnvelope(i.envelope), this.filterEnvelope = new t.ScaledEnvelope(i.filterEnvelope), this._sample = i.sample, this._pitch = i.pitch, this.filter = new t.Filter(i.filter), this._loadBuffers(e), this.pitch = i.pitch, this.player.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), this._readOnly(["player", "filterEnvelope", "envelope", "filter"])
        }, t.extend(t.Sampler, t.Instrument), t.Sampler.defaults = {
            sample: 0,
            pitch: 0,
            player: {
                loop: !1
            },
            envelope: {
                attack: .001,
                decay: 0,
                sustain: 1,
                release: .1
            },
            filterEnvelope: {
                attack: .001,
                decay: .001,
                sustain: 1,
                release: .5,
                min: 20,
                max: 2e4,
                exponent: 2
            },
            filter: {
                type: "lowpass"
            }
        }, t.Sampler.prototype._loadBuffers = function(e) {
            var i, s;
            if ("string" == typeof e) this._buffers[0] = new t.Buffer(e, function() {
                this.sample = "0"
            }.bind(this));
            else {
                e = this._flattenUrls(e);
                for (i in e) this._sample = i, s = e[i], this._buffers[i] = new t.Buffer(s)
            }
        }, t.Sampler.prototype._flattenUrls = function(t) {
            var e, i, s, n = {};
            for (e in t)
                if (t.hasOwnProperty(e))
                    if ("object" == typeof t[e]) {
                        i = this._flattenUrls(t[e]);
                        for (s in i) i.hasOwnProperty(s) && (n[e + "." + s] = i[s])
                    } else n[e] = t[e];
            return n
        }, t.Sampler.prototype.triggerAttack = function(t, e, i) {
            return e = this.toSeconds(e), t && (this.sample = t), this.player.start(e), this.envelope.triggerAttack(e, i), this.filterEnvelope.triggerAttack(e), this
        }, t.Sampler.prototype.triggerRelease = function(t) {
            return t = this.toSeconds(t), this.filterEnvelope.triggerRelease(t), this.envelope.triggerRelease(t), this.player.stop(this.toSeconds(this.envelope.release) + t), this
        }, Object.defineProperty(t.Sampler.prototype, "sample", {
            get: function() {
                return this._sample
            },
            set: function(t) {
                if (!this._buffers.hasOwnProperty(t)) throw new Error("Sampler does not have a sample named " + t);
                this._sample = t, this.player.buffer = this._buffers[t]
            }
        }), Object.defineProperty(t.Sampler.prototype, "reverse", {
            get: function() {
                for (var t in this._buffers) return this._buffers[t].reverse
            },
            set: function(t) {
                for (var e in this._buffers) this._buffers[e].reverse = t
            }
        }), Object.defineProperty(t.Sampler.prototype, "pitch", {
            get: function() {
                return this._pitch
            },
            set: function(t) {
                this._pitch = t, this.player.playbackRate = this.intervalToFrequencyRatio(t)
            }
        }), t.Sampler.prototype.dispose = function() {
            t.Instrument.prototype.dispose.call(this), this._writable(["player", "filterEnvelope", "envelope", "filter"]), this.player.dispose(), this.filterEnvelope.dispose(), this.envelope.dispose(), this.filter.dispose(), this.player = null, this.filterEnvelope = null, this.envelope = null, this.filter = null;
            for (var e in this._buffers) this._buffers[e].dispose(), this._buffers[e] = null;
            return this._buffers = null, this
        }, t.Sampler
    }), Module(function(t) {
        return t.SimpleSynth = function(e) {
            e = this.defaultArg(e, t.SimpleSynth.defaults), t.Monophonic.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new t.AmplitudeEnvelope(e.envelope), this.oscillator.chain(this.envelope, this.output), this.oscillator.start(), this._readOnly(["oscillator", "frequency", "detune", "envelope"])
        }, t.extend(t.SimpleSynth, t.Monophonic), t.SimpleSynth.defaults = {
            oscillator: {
                type: "triangle"
            },
            envelope: {
                attack: .005,
                decay: .1,
                sustain: .3,
                release: 1
            }
        }, t.SimpleSynth.prototype._triggerEnvelopeAttack = function(t, e) {
            return this.envelope.triggerAttack(t, e), this
        }, t.SimpleSynth.prototype._triggerEnvelopeRelease = function(t) {
            return this.envelope.triggerRelease(t), this
        }, t.SimpleSynth.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.frequency = null, this.detune = null, this
        }, t.SimpleSynth
    }), Module(function(t) {
        return t.SimpleAM = function(e) {
            e = this.defaultArg(e, t.SimpleAM.defaults), t.Monophonic.call(this, e), this.carrier = new t.SimpleSynth(e.carrier), this.modulator = new t.SimpleSynth(e.modulator), this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationScale = new t.AudioToGain, this._modulationNode = this.context.createGain(), this.frequency.connect(this.carrier.frequency), this.frequency.chain(this.harmonicity, this.modulator.frequency), this.modulator.chain(this._modulationScale, this._modulationNode.gain), this.carrier.chain(this._modulationNode, this.output), this._readOnly(["carrier", "modulator", "frequency", "harmonicity"])
        }, t.extend(t.SimpleAM, t.Monophonic), t.SimpleAM.defaults = {
            harmonicity: 3,
            carrier: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: .01,
                    sustain: 1,
                    release: .5
                }
            },
            modulator: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .5,
                    decay: .1,
                    sustain: 1,
                    release: .5
                }
            }
        }, t.SimpleAM.prototype._triggerEnvelopeAttack = function(t, e) {
            return t = this.toSeconds(t), this.carrier.envelope.triggerAttack(t, e), this.modulator.envelope.triggerAttack(t), this
        }, t.SimpleAM.prototype._triggerEnvelopeRelease = function(t) {
            return this.carrier.triggerRelease(t), this.modulator.triggerRelease(t), this
        }, t.SimpleAM.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["carrier", "modulator", "frequency", "harmonicity"]), this.carrier.dispose(), this.carrier = null, this.modulator.dispose(), this.modulator = null, this.frequency.dispose(), this.frequency = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationScale.dispose(), this._modulationScale = null, this._modulationNode.disconnect(), this._modulationNode = null, this
        }, t.SimpleAM
    }), Module(function(t) {
        return t.SimpleFM = function(e) {
            e = this.defaultArg(e, t.SimpleFM.defaults), t.Monophonic.call(this, e), this.carrier = new t.SimpleSynth(e.carrier), this.carrier.volume.value = -10, this.modulator = new t.SimpleSynth(e.modulator), this.modulator.volume.value = -10, this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.modulationIndex = new t.Multiply(e.modulationIndex), this.modulationIndex.units = t.Type.Positive, this._modulationNode = this.context.createGain(), this.frequency.connect(this.carrier.frequency), this.frequency.chain(this.harmonicity, this.modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.modulator.connect(this._modulationNode.gain), this._modulationNode.gain.value = 0, this._modulationNode.connect(this.carrier.frequency), this.carrier.connect(this.output), this._readOnly(["carrier", "modulator", "frequency", "harmonicity", "modulationIndex"])
        }, t.extend(t.SimpleFM, t.Monophonic), t.SimpleFM.defaults = {
            harmonicity: 3,
            modulationIndex: 10,
            carrier: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "sine"
                },
                envelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            },
            modulator: {
                volume: -10,
                portamento: 0,
                oscillator: {
                    type: "triangle"
                },
                envelope: {
                    attack: .01,
                    decay: 0,
                    sustain: 1,
                    release: .5
                }
            }
        }, t.SimpleFM.prototype._triggerEnvelopeAttack = function(t, e) {
            return t = this.toSeconds(t), this.carrier.envelope.triggerAttack(t, e), this.modulator.envelope.triggerAttack(t), this
        }, t.SimpleFM.prototype._triggerEnvelopeRelease = function(t) {
            return this.carrier.triggerRelease(t), this.modulator.triggerRelease(t), this
        }, t.SimpleFM.prototype.dispose = function() {
            return t.Monophonic.prototype.dispose.call(this), this._writable(["carrier", "modulator", "frequency", "harmonicity", "modulationIndex"]), this.carrier.dispose(), this.carrier = null, this.modulator.dispose(), this.modulator = null, this.frequency.dispose(), this.frequency = null, this.modulationIndex.dispose(), this.modulationIndex = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationNode.disconnect(), this._modulationNode = null, this
        }, t.SimpleFM
    }), Module(function(t) {
        return t.Effect = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["wet"], t.Effect.defaults);
            this._dryWet = new t.CrossFade(e.wet), this.wet = this._dryWet.fade, this.effectSend = this.context.createGain(), this.effectReturn = this.context.createGain(), this.input.connect(this._dryWet.a), this.input.connect(this.effectSend), this.effectReturn.connect(this._dryWet.b), this._dryWet.connect(this.output), this._readOnly(["wet"])
        }, t.extend(t.Effect), t.Effect.defaults = {
            wet: 1
        }, t.Effect.prototype.connectEffect = function(t) {
            return this.effectSend.chain(t, this.effectReturn), this
        }, t.Effect.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this.effectSend.disconnect(), this.effectSend = null, this.effectReturn.disconnect(), this.effectReturn = null, this._writable(["wet"]), this.wet = null, this
        }, t.Effect
    }), Module(function(t) {
        return t.AutoFilter = function() {
            var e = this.optionsObject(arguments, ["frequency", "min", "max"], t.AutoFilter.defaults);
            t.Effect.call(this, e), this._lfo = new t.LFO({
                frequency: e.frequency,
                amplitude: e.depth,
                min: e.min,
                max: e.max
            }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.filter = new t.Filter(e.filter), this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.type = e.type, this._readOnly(["frequency", "depth"])
        }, t.extend(t.AutoFilter, t.Effect), t.AutoFilter.defaults = {
            frequency: 1,
            type: "sine",
            depth: 1,
            min: 200,
            max: 1200,
            filter: {
                type: "lowpass",
                rolloff: -12,
                Q: 1
            }
        }, t.AutoFilter.prototype.start = function(t) {
            return this._lfo.start(t), this
        }, t.AutoFilter.prototype.stop = function(t) {
            return this._lfo.stop(t), this
        }, t.AutoFilter.prototype.sync = function(t) {
            return this._lfo.sync(t), this
        }, t.AutoFilter.prototype.unsync = function() {
            return this._lfo.unsync(), this
        }, Object.defineProperty(t.AutoFilter.prototype, "type", {
            get: function() {
                return this._lfo.type
            },
            set: function(t) {
                this._lfo.type = t
            }
        }), Object.defineProperty(t.AutoFilter.prototype, "min", {
            get: function() {
                return this._lfo.min
            },
            set: function(t) {
                this._lfo.min = t
            }
        }), Object.defineProperty(t.AutoFilter.prototype, "max", {
            get: function() {
                return this._lfo.max
            },
            set: function(t) {
                this._lfo.max = t
            }
        }), t.AutoFilter.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this.filter.dispose(), this.filter = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null, this
        }, t.AutoFilter
    }), Module(function(t) {
        return t.AutoPanner = function() {
            var e = this.optionsObject(arguments, ["frequency"], t.AutoPanner.defaults);
            t.Effect.call(this, e), this._lfo = new t.LFO({
                frequency: e.frequency,
                amplitude: e.depth,
                min: 0,
                max: 1,
                phase: 90
            }), this.depth = this._lfo.amplitude, this._panner = new t.Panner, this.frequency = this._lfo.frequency, this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this.type = e.type, this._readOnly(["depth", "frequency"])
        }, t.extend(t.AutoPanner, t.Effect), t.AutoPanner.defaults = {
            frequency: 1,
            type: "sine",
            depth: 1
        }, t.AutoPanner.prototype.start = function(t) {
            return this._lfo.start(t), this
        }, t.AutoPanner.prototype.stop = function(t) {
            return this._lfo.stop(t), this
        }, t.AutoPanner.prototype.sync = function(t) {
            return this._lfo.sync(t), this
        }, t.AutoPanner.prototype.unsync = function() {
            return this._lfo.unsync(), this
        }, Object.defineProperty(t.AutoPanner.prototype, "type", {
            get: function() {
                return this._lfo.type
            },
            set: function(t) {
                this._lfo.type = t
            }
        }), t.AutoPanner.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this._panner.dispose(), this._panner = null, this._writable(["depth", "frequency"]), this.frequency = null, this.depth = null, this
        }, t.AutoPanner
    }), Module(function(t) {
        return t.AutoWah = function() {
            var e = this.optionsObject(arguments, ["baseFrequency", "octaves", "sensitivity"], t.AutoWah.defaults);
            t.Effect.call(this, e), this.follower = new t.Follower(e.follower), this._sweepRange = new t.ScaleExp(0, 1, .5), this._baseFrequency = e.baseFrequency, this._octaves = e.octaves, this._inputBoost = this.context.createGain(), this._bandpass = new t.Filter({
                rolloff: -48,
                frequency: 0,
                Q: e.Q
            }), this._peaking = new t.Filter(0, "peaking"), this._peaking.gain.value = e.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = e.sensitivity, this._readOnly(["gain", "Q"])
        }, t.extend(t.AutoWah, t.Effect), t.AutoWah.defaults = {
            baseFrequency: 100,
            octaves: 6,
            sensitivity: 0,
            Q: 2,
            gain: 2,
            follower: {
                attack: .3,
                release: .5
            }
        }, Object.defineProperty(t.AutoWah.prototype, "octaves", {
            get: function() {
                return this._octaves
            },
            set: function(t) {
                this._octaves = t, this._setSweepRange()
            }
        }), Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
            get: function() {
                return this._baseFrequency
            },
            set: function(t) {
                this._baseFrequency = t, this._setSweepRange()
            }
        }), Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
            get: function() {
                return this.gainToDb(1 / this._inputBoost.gain.value)
            },
            set: function(t) {
                this._inputBoost.gain.value = 1 / this.dbToGain(t)
            }
        }), t.AutoWah.prototype._setSweepRange = function() {
            this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2)
        }, t.AutoWah.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this.follower.dispose(), this.follower = null, this._sweepRange.dispose(), this._sweepRange = null, this._bandpass.dispose(), this._bandpass = null, this._peaking.dispose(), this._peaking = null, this._inputBoost.disconnect(), this._inputBoost = null, this._writable(["gain", "Q"]), this.gain = null, this.Q = null, this
        }, t.AutoWah
    }), Module(function(t) {
        return t.BitCrusher = function() {
            var e, i = this.optionsObject(arguments, ["bits"], t.BitCrusher.defaults);
            t.Effect.call(this, i), e = 1 / Math.pow(2, i.bits - 1), this._subtract = new t.Subtract, this._modulo = new t.Modulo(e), this._bits = i.bits, this.effectSend.fan(this._subtract, this._modulo), this._modulo.connect(this._subtract, 0, 1), this._subtract.connect(this.effectReturn)
        }, t.extend(t.BitCrusher, t.Effect), t.BitCrusher.defaults = {
            bits: 4
        }, Object.defineProperty(t.BitCrusher.prototype, "bits", {
            get: function() {
                return this._bits
            },
            set: function(t) {
                this._bits = t;
                var e = 1 / Math.pow(2, t - 1);
                this._modulo.value = e
            }
        }), t.BitCrusher.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._subtract.dispose(), this._subtract = null, this._modulo.dispose(), this._modulo = null, this
        }, t.BitCrusher
    }), Module(function(t) {
        return t.Chebyshev = function() {
            var e = this.optionsObject(arguments, ["order"], t.Chebyshev.defaults);
            t.Effect.call(this), this._shaper = new t.WaveShaper(4096), this._order = e.order, this.connectEffect(this._shaper), this.order = e.order, this.oversample = e.oversample
        }, t.extend(t.Chebyshev, t.Effect), t.Chebyshev.defaults = {
            order: 1,
            oversample: "none"
        }, t.Chebyshev.prototype._getCoefficient = function(t, e, i) {
            return i.hasOwnProperty(e) ? i[e] : (i[e] = 0 === e ? 0 : 1 === e ? t : 2 * t * this._getCoefficient(t, e - 1, i) - this._getCoefficient(t, e - 2, i), i[e])
        }, Object.defineProperty(t.Chebyshev.prototype, "order", {
            get: function() {
                return this._order
            },
            set: function(t) {
                var e, i, s, n;
                for (this._order = t, e = new Array(4096), i = e.length, s = 0; i > s; ++s) n = 2 * s / i - 1, e[s] = 0 === n ? 0 : this._getCoefficient(n, t, {});
                this._shaper.curve = e
            }
        }), Object.defineProperty(t.Chebyshev.prototype, "oversample", {
            get: function() {
                return this._shaper.oversample
            },
            set: function(t) {
                this._shaper.oversample = t
            }
        }), t.Chebyshev.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this
        }, t.Chebyshev
    }), Module(function(t) {
        return t.StereoEffect = function() {
            t.call(this);
            var e = this.optionsObject(arguments, ["wet"], t.Effect.defaults);
            this._dryWet = new t.CrossFade(e.wet), this.wet = this._dryWet.fade, this._split = new t.Split, this.effectSendL = this._split.left, this.effectSendR = this._split.right, this._merge = new t.Merge, this.effectReturnL = this._merge.left, this.effectReturnR = this._merge.right, this.input.connect(this._split), this.input.connect(this._dryWet, 0, 0), this._merge.connect(this._dryWet, 0, 1), this._dryWet.connect(this.output), this._readOnly(["wet"])
        }, t.extend(t.StereoEffect, t.Effect), t.StereoEffect.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this._split.dispose(), this._split = null, this._merge.dispose(), this._merge = null, this.effectSendL = null, this.effectSendR = null, this.effectReturnL = null, this.effectReturnR = null, this._writable(["wet"]), this.wet = null, this
        }, t.StereoEffect
    }), Module(function(t) {
        return t.FeedbackEffect = function() {
            var e = this.optionsObject(arguments, ["feedback"]);
            e = this.defaultArg(e, t.FeedbackEffect.defaults), t.Effect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackGain = this.context.createGain(), this.effectReturn.chain(this._feedbackGain, this.effectSend), this.feedback.connect(this._feedbackGain.gain), this._readOnly(["feedback"])
        }, t.extend(t.FeedbackEffect, t.Effect), t.FeedbackEffect.defaults = {
            feedback: .125
        }, t.FeedbackEffect.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackGain.disconnect(), this._feedbackGain = null, this
        }, t.FeedbackEffect
    }), Module(function(t) {
        return t.StereoXFeedbackEffect = function() {
            var e = this.optionsObject(arguments, ["feedback"], t.FeedbackEffect.defaults);
            t.StereoEffect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackLR = this.context.createGain(), this._feedbackRL = this.context.createGain(), this.effectReturnL.chain(this._feedbackLR, this.effectSendR), this.effectReturnR.chain(this._feedbackRL, this.effectSendL), this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain), this._readOnly(["feedback"])
        }, t.extend(t.StereoXFeedbackEffect, t.FeedbackEffect), t.StereoXFeedbackEffect.prototype.dispose = function() {
            return t.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackLR.disconnect(), this._feedbackLR = null, this._feedbackRL.disconnect(), this._feedbackRL = null, this
        }, t.StereoXFeedbackEffect
    }), Module(function(t) {
        return t.Chorus = function() {
            var e = this.optionsObject(arguments, ["frequency", "delayTime", "depth"], t.Chorus.defaults);
            t.StereoXFeedbackEffect.call(this, e), this._depth = e.depth, this._delayTime = e.delayTime / 1e3, this._lfoL = new t.LFO(e.rate, 0, 1), this._lfoR = new t.LFO(e.rate, 0, 1), this._lfoR.phase = 180, this._delayNodeL = this.context.createDelay(), this._delayNodeR = this.context.createDelay(), this.frequency = this._lfoL.frequency, this.connectSeries(this.effectSendL, this._delayNodeL, this.effectReturnL), this.connectSeries(this.effectSendR, this._delayNodeR, this.effectReturnR), this.input.connect(this.output), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this._lfoL.start(), this._lfoR.start(), this._lfoL.frequency.connect(this._lfoR.frequency), this.depth = this._depth, this.frequency.value = e.frequency, this.type = e.type, this._readOnly(["frequency"])
        }, t.extend(t.Chorus, t.StereoXFeedbackEffect), t.Chorus.defaults = {
            frequency: 1.5,
            delayTime: 3.5,
            depth: .7,
            feedback: .1,
            type: "sine"
        }, Object.defineProperty(t.Chorus.prototype, "depth", {
            get: function() {
                return this._depth
            },
            set: function(t) {
                this._depth = t;
                var e = this._delayTime * t;
                this._lfoL.min = Math.max(this._delayTime - e, 0), this._lfoL.max = this._delayTime + e, this._lfoR.min = Math.max(this._delayTime - e, 0), this._lfoR.max = this._delayTime + e
            }
        }), Object.defineProperty(t.Chorus.prototype, "delayTime", {
            get: function() {
                return 1e3 * this._delayTime
            },
            set: function(t) {
                this._delayTime = t / 1e3, this.depth = this._depth
            }
        }), Object.defineProperty(t.Chorus.prototype, "type", {
            get: function() {
                return this._lfoL.type
            },
            set: function(t) {
                this._lfoL.type = t, this._lfoR.type = t
            }
        }), t.Chorus.prototype.dispose = function() {
            return t.StereoXFeedbackEffect.prototype.dispose.call(this), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._delayNodeL.disconnect(), this._delayNodeL = null, this._delayNodeR.disconnect(), this._delayNodeR = null, this._writable("frequency"), this.frequency = null, this
        }, t.Chorus
    }), Module(function(t) {
        return t.Convolver = function() {
                var e = this.optionsObject(arguments, ["url"], t.Convolver.defaults);
                t.Effect.call(this, e), this._convolver = this.context.createConvolver(), this._buffer = new t.Buffer(e.url, function(t) {
                    this.buffer = t, e.onload()
                }.bind(this)), this.connectEffect(this._convolver)
            }, t.extend(t.Convolver, t.Effect), t.Convolver.defaults = {
                url: "",
                onload: t.noOp
            }, Object.defineProperty(t.Convolver.prototype, "buffer", {
                get: function() {
                    return this._buffer.get()
                },
                set: function(t) {
                    this._buffer.set(t), this._convolver.buffer = this._buffer.get()
                }
            }),
            t.Convolver.prototype.load = function(t, e) {
                return this._buffer.load(t, function(t) {
                    this.buffer = t, e && e()
                }.bind(this)), this
            }, t.Convolver.prototype.dispose = function() {
                return t.Effect.prototype.dispose.call(this), this._convolver.disconnect(), this._convolver = null, this._buffer.dispose(), this._buffer = null, this
            }, t.Convolver
    }), Module(function(t) {
        return t.Distortion = function() {
            var e = this.optionsObject(arguments, ["distortion"], t.Distortion.defaults);
            t.Effect.call(this, e), this._shaper = new t.WaveShaper(4096), this._distortion = e.distortion, this.connectEffect(this._shaper), this.distortion = e.distortion, this.oversample = e.oversample
        }, t.extend(t.Distortion, t.Effect), t.Distortion.defaults = {
            distortion: .4,
            oversample: "none"
        }, Object.defineProperty(t.Distortion.prototype, "distortion", {
            get: function() {
                return this._distortion
            },
            set: function(t) {
                var e, i;
                this._distortion = t, e = 100 * t, i = Math.PI / 180, this._shaper.setMap(function(t) {
                    return Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * i / (Math.PI + e * Math.abs(t))
                })
            }
        }), Object.defineProperty(t.Distortion.prototype, "oversample", {
            get: function() {
                return this._shaper.oversample
            },
            set: function(t) {
                this._shaper.oversample = t
            }
        }), t.Distortion.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this
        }, t.Distortion
    }), Module(function(t) {
        return t.FeedbackDelay = function() {
            var e = this.optionsObject(arguments, ["delayTime", "feedback"], t.FeedbackDelay.defaults);
            t.FeedbackEffect.call(this, e), this.delayTime = new t.Signal(e.delayTime, t.Type.Time), this._delayNode = this.context.createDelay(4), this.connectEffect(this._delayNode), this.delayTime.connect(this._delayNode.delayTime), this._readOnly(["delayTime"])
        }, t.extend(t.FeedbackDelay, t.FeedbackEffect), t.FeedbackDelay.defaults = {
            delayTime: .25
        }, t.FeedbackDelay.prototype.dispose = function() {
            return t.FeedbackEffect.prototype.dispose.call(this), this.delayTime.dispose(), this._delayNode.disconnect(), this._delayNode = null, this._writable(["delayTime"]), this.delayTime = null, this
        }, t.FeedbackDelay
    }), Module(function(t) {
        var e = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100],
            i = [225, 556, 441, 341];
        return t.Freeverb = function() {
            var s, n, o, r, l, a, h = this.optionsObject(arguments, ["roomSize", "dampening"], t.Freeverb.defaults);
            for (t.StereoEffect.call(this, h), this.roomSize = new t.Signal(h.roomSize, t.Type.NormalRange), this.dampening = new t.Signal(h.dampening, t.Type.Frequency), this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [], s = 0; s < i.length; s++) n = this.context.createBiquadFilter(), n.type = "allpass", n.frequency.value = i[s], this._allpassFiltersL.push(n);
            for (o = 0; o < i.length; o++) r = this.context.createBiquadFilter(), r.type = "allpass", r.frequency.value = i[o], this._allpassFiltersR.push(r);
            for (l = 0; l < e.length; l++) a = new t.LowpassCombFilter(e[l]), l < e.length / 2 ? this.effectSendL.chain(a, this._allpassFiltersL[0]) : this.effectSendR.chain(a, this._allpassFiltersR[0]), this.roomSize.connect(a.resonance), this.dampening.connect(a.dampening), this._combFilters.push(a);
            this.connectSeries.apply(this, this._allpassFiltersL), this.connectSeries.apply(this, this._allpassFiltersR), this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(this.effectReturnL), this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(this.effectReturnR), this._readOnly(["roomSize", "dampening"])
        }, t.extend(t.Freeverb, t.StereoEffect), t.Freeverb.defaults = {
            roomSize: .7,
            dampening: 3e3
        }, t.Freeverb.prototype.dispose = function() {
            var e, i, s;
            for (t.StereoEffect.prototype.dispose.call(this), e = 0; e < this._allpassFiltersL.length; e++) this._allpassFiltersL[e].disconnect(), this._allpassFiltersL[e] = null;
            for (this._allpassFiltersL = null, i = 0; i < this._allpassFiltersR.length; i++) this._allpassFiltersR[i].disconnect(), this._allpassFiltersR[i] = null;
            for (this._allpassFiltersR = null, s = 0; s < this._combFilters.length; s++) this._combFilters[s].dispose(), this._combFilters[s] = null;
            return this._combFilters = null, this._writable(["roomSize", "dampening"]), this.roomSize.dispose(), this.roomSize = null, this.dampening.dispose(), this.dampening = null, this
        }, t.Freeverb
    }), Module(function(t) {
        var e = [.06748, .06404, .08212, .09004],
            i = [.773, .802, .753, .733],
            s = [347, 113, 37];
        return t.JCReverb = function() {
            var n, o, r, l, a = this.optionsObject(arguments, ["roomSize"], t.JCReverb.defaults);
            for (t.StereoEffect.call(this, a), this.roomSize = new t.Signal(a.roomSize, t.Type.NormalRange), this._scaleRoomSize = new t.Scale(-.733, .197), this._allpassFilters = [], this._feedbackCombFilters = [], n = 0; n < s.length; n++) o = this.context.createBiquadFilter(), o.type = "allpass", o.frequency.value = s[n], this._allpassFilters.push(o);
            for (r = 0; r < e.length; r++) l = new t.FeedbackCombFilter(e[r], .1), this._scaleRoomSize.connect(l.resonance), l.resonance.value = i[r], this._allpassFilters[this._allpassFilters.length - 1].connect(l), l.connect(r < e.length / 2 ? this.effectReturnL : this.effectReturnR), this._feedbackCombFilters.push(l);
            this.roomSize.connect(this._scaleRoomSize), this.connectSeries.apply(this, this._allpassFilters), this.effectSendL.connect(this._allpassFilters[0]), this.effectSendR.connect(this._allpassFilters[0]), this._readOnly(["roomSize"])
        }, t.extend(t.JCReverb, t.StereoEffect), t.JCReverb.defaults = {
            roomSize: .5
        }, t.JCReverb.prototype.dispose = function() {
            var e, i;
            for (t.StereoEffect.prototype.dispose.call(this), e = 0; e < this._allpassFilters.length; e++) this._allpassFilters[e].disconnect(), this._allpassFilters[e] = null;
            for (this._allpassFilters = null, i = 0; i < this._feedbackCombFilters.length; i++) this._feedbackCombFilters[i].dispose(), this._feedbackCombFilters[i] = null;
            return this._feedbackCombFilters = null, this._writable(["roomSize"]), this.roomSize.dispose(), this.roomSize = null, this._scaleRoomSize.dispose(), this._scaleRoomSize = null, this
        }, t.JCReverb
    }), Module(function(t) {
        return t.MidSideEffect = function() {
            t.Effect.call(this), this._midSideSplit = new t.MidSideSplit, this._midSideMerge = new t.MidSideMerge, this.midSend = this._midSideSplit.mid, this.sideSend = this._midSideSplit.side, this.midReturn = this._midSideMerge.mid, this.sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn)
        }, t.extend(t.MidSideEffect, t.Effect), t.MidSideEffect.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this.midSend = null, this.sideSend = null, this.midReturn = null, this.sideReturn = null, this
        }, t.MidSideEffect
    }), Module(function(t) {
        return t.Phaser = function() {
            var e = this.optionsObject(arguments, ["frequency", "depth", "baseFrequency"], t.Phaser.defaults);
            t.StereoEffect.call(this, e), this._lfoL = new t.LFO(e.frequency, 0, 1), this._lfoR = new t.LFO(e.frequency, 0, 1), this._lfoR.phase = 180, this._baseFrequency = e.baseFrequency, this._depth = e.depth, this.Q = new t.Signal(e.Q, t.Type.Positive), this._filtersL = this._makeFilters(e.stages, this._lfoL, this.Q), this._filtersR = this._makeFilters(e.stages, this._lfoR, this.Q), this.frequency = this._lfoL.frequency, this.frequency.value = e.frequency, this.effectSendL.connect(this._filtersL[0]), this.effectSendR.connect(this._filtersR[0]), this._filtersL[e.stages - 1].connect(this.effectReturnL), this._filtersR[e.stages - 1].connect(this.effectReturnR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = e.baseFrequency, this.depth = e.depth, this._lfoL.start(), this._lfoR.start(), this._readOnly(["frequency", "Q"])
        }, t.extend(t.Phaser, t.StereoEffect), t.Phaser.defaults = {
            frequency: .5,
            depth: 10,
            stages: 10,
            Q: 10,
            baseFrequency: 350
        }, t.Phaser.prototype._makeFilters = function(t, e, i) {
            var s, n, o = new Array(t);
            for (s = 0; t > s; s++) n = this.context.createBiquadFilter(), n.type = "allpass", i.connect(n.Q), e.connect(n.frequency), o[s] = n;
            return this.connectSeries.apply(this, o), o
        }, Object.defineProperty(t.Phaser.prototype, "depth", {
            get: function() {
                return this._depth
            },
            set: function(t) {
                this._depth = t;
                var e = this._baseFrequency + this._baseFrequency * t;
                this._lfoL.max = e, this._lfoR.max = e
            }
        }), Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
            get: function() {
                return this._baseFrequency
            },
            set: function(t) {
                this._baseFrequency = t, this._lfoL.min = t, this._lfoR.min = t, this.depth = this._depth
            }
        }), t.Phaser.prototype.dispose = function() {
            var e, i;
            for (t.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "Q"]), this.Q.dispose(), this.Q = null, this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, e = 0; e < this._filtersL.length; e++) this._filtersL[e].disconnect(), this._filtersL[e] = null;
            for (this._filtersL = null, i = 0; i < this._filtersR.length; i++) this._filtersR[i].disconnect(), this._filtersR[i] = null;
            return this._filtersR = null, this.frequency = null, this
        }, t.Phaser
    }), Module(function(t) {
        return t.PingPongDelay = function() {
            var e = this.optionsObject(arguments, ["delayTime", "feedback"], t.PingPongDelay.defaults);
            t.StereoXFeedbackEffect.call(this, e), this._leftDelay = this.context.createDelay(e.maxDelayTime), this._rightDelay = this.context.createDelay(e.maxDelayTime), this._rightPreDelay = this.context.createDelay(e.maxDelayTime), this.delayTime = new t.Signal(e.delayTime, t.Type.Time), this.effectSendL.chain(this._leftDelay, this.effectReturnL), this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackLR.disconnect(), this._feedbackLR.connect(this._rightDelay), this._readOnly(["delayTime"])
        }, t.extend(t.PingPongDelay, t.StereoXFeedbackEffect), t.PingPongDelay.defaults = {
            delayTime: .25,
            maxDelayTime: 1
        }, t.PingPongDelay.prototype.dispose = function() {
            return t.StereoXFeedbackEffect.prototype.dispose.call(this), this._leftDelay.disconnect(), this._leftDelay = null, this._rightDelay.disconnect(), this._rightDelay = null, this._rightPreDelay.disconnect(), this._rightPreDelay = null, this._writable(["delayTime"]), this.delayTime.dispose(), this.delayTime = null, this
        }, t.PingPongDelay
    }), Module(function(t) {
        return t.StereoFeedbackEffect = function() {
            var e = this.optionsObject(arguments, ["feedback"], t.FeedbackEffect.defaults);
            t.StereoEffect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackL = this.context.createGain(), this._feedbackR = this.context.createGain(), this.effectReturnL.chain(this._feedbackL, this.effectSendL), this.effectReturnR.chain(this._feedbackR, this.effectSendR), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), this._readOnly(["feedback"])
        }, t.extend(t.StereoFeedbackEffect, t.FeedbackEffect), t.StereoFeedbackEffect.prototype.dispose = function() {
            return t.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackL.disconnect(), this._feedbackL = null, this._feedbackR.disconnect(), this._feedbackR = null, this
        }, t.StereoFeedbackEffect
    }), Module(function(t) {
        return t.StereoWidener = function() {
            var e = this.optionsObject(arguments, ["width"], t.StereoWidener.defaults);
            t.MidSideEffect.call(this, e), this.width = new t.Signal(.5, t.Type.NormalRange), this._midMult = new t.Expr("$0 * ($1 * (1 - $2))"), this._sideMult = new t.Expr("$0 * ($1 * $2)"), this._two = new t.Signal(2), this._two.connect(this._midMult, 0, 1), this.width.connect(this._midMult, 0, 2), this._two.connect(this._sideMult, 0, 1), this.width.connect(this._sideMult, 0, 2), this.midSend.chain(this._midMult, this.midReturn), this.sideSend.chain(this._sideMult, this.sideReturn), this._readOnly(["width"])
        }, t.extend(t.StereoWidener, t.MidSideEffect), t.StereoWidener.defaults = {
            width: .5
        }, t.StereoWidener.prototype.dispose = function() {
            return t.MidSideEffect.prototype.dispose.call(this), this._writable(["width"]), this.width.dispose(), this.width = null, this._midMult.dispose(), this._midMult = null, this._sideMult.dispose(), this._sideMult = null, this._two.dispose(), this._two = null, this
        }, t.StereoWidener
    }), Module(function(t) {
        return t.Tremolo = function() {
            var e = this.optionsObject(arguments, ["frequency", "depth"], t.Tremolo.defaults);
            t.Effect.call(this, e), this._lfo = new t.LFO({
                frequency: e.frequency,
                amplitude: e.depth,
                min: 1,
                max: 0
            }), this._amplitude = this.context.createGain(), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this._readOnly(["frequency", "depth"]), this.connectEffect(this._amplitude), this._lfo.connect(this._amplitude.gain), this.type = e.type
        }, t.extend(t.Tremolo, t.Effect), t.Tremolo.defaults = {
            frequency: 10,
            type: "sine",
            depth: .5
        }, t.Tremolo.prototype.start = function(t) {
            return this._lfo.start(t), this
        }, t.Tremolo.prototype.stop = function(t) {
            return this._lfo.stop(t), this
        }, t.Tremolo.prototype.sync = function(t) {
            return this._lfo.sync(t), this
        }, t.Tremolo.prototype.unsync = function() {
            return this._lfo.unsync(), this
        }, Object.defineProperty(t.Tremolo.prototype, "type", {
            get: function() {
                return this._lfo.type
            },
            set: function(t) {
                this._lfo.type = t
            }
        }), t.Tremolo.prototype.dispose = function() {
            return t.Effect.prototype.dispose.call(this), this._writable(["frequency", "depth"]), this._lfo.dispose(), this._lfo = null, this._amplitude.disconnect(), this._amplitude = null, this.frequency = null, this.depth = null, this
        }, t.Tremolo
    }), Module(function(t) {
        return t.Clip = function(e, i) {
            if (e > i) {
                var s = e;
                e = i, i = s
            }
            this.min = this.input = new t.Min(i), this._readOnly("min"), this.max = this.output = new t.Max(e), this._readOnly("max"), this.min.connect(this.max)
        }, t.extend(t.Clip, t.SignalBase), t.Clip.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable("min"), this.min.dispose(), this.min = null, this._writable("max"), this.max.dispose(), this.max = null, this
        }, t.Clip
    }), Module(function(t) {
        return t.Normalize = function(e, i) {
            this._inputMin = this.defaultArg(e, 0), this._inputMax = this.defaultArg(i, 1), this._sub = this.input = new t.Add(0), this._div = this.output = new t.Multiply(1), this._sub.connect(this._div), this._setRange()
        }, t.extend(t.Normalize, t.SignalBase), Object.defineProperty(t.Normalize.prototype, "min", {
            get: function() {
                return this._inputMin
            },
            set: function(t) {
                this._inputMin = t, this._setRange()
            }
        }), Object.defineProperty(t.Normalize.prototype, "max", {
            get: function() {
                return this._inputMax
            },
            set: function(t) {
                this._inputMax = t, this._setRange()
            }
        }), t.Normalize.prototype._setRange = function() {
            this._sub.value = -this._inputMin, this._div.value = 1 / (this._inputMax - this._inputMin)
        }, t.Normalize.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._sub.dispose(), this._sub = null, this._div.dispose(), this._div = null, this
        }, t.Normalize
    }), Module(function(t) {
        t.Route = function(i) {
            var s, n;
            for (i = this.defaultArg(i, 2), t.call(this, 1, i), this.gate = new t.Signal(0), this._readOnly("gate"), s = 0; i > s; s++) n = new e(s), this.output[s] = n, this.gate.connect(n.selecter), this.input.connect(n)
        }, t.extend(t.Route, t.SignalBase), t.Route.prototype.select = function(t, e) {
            return t = Math.floor(t), this.gate.setValueAtTime(t, this.toSeconds(e)), this
        }, t.Route.prototype.dispose = function() {
            this._writable("gate"), this.gate.dispose(), this.gate = null;
            for (var e = 0; e < this.output.length; e++) this.output[e].dispose(), this.output[e] = null;
            return t.prototype.dispose.call(this), this
        };
        var e = function(e) {
            this.selecter = new t.Equal(e), this.gate = this.input = this.output = this.context.createGain(), this.selecter.connect(this.gate.gain)
        };
        return t.extend(e), e.prototype.dispose = function() {
            t.prototype.dispose.call(this), this.selecter.dispose(), this.selecter = null, this.gate.disconnect(), this.gate = null
        }, t.Route
    }), Module(function(t) {
        return t.Switch = function(e) {
            e = this.defaultArg(e, !1), t.call(this), this.gate = new t.Signal(0), this._readOnly("gate"), this._thresh = new t.GreaterThan(.5), this.input.connect(this.output), this.gate.chain(this._thresh, this.output.gain), e && this.open()
        }, t.extend(t.Switch, t.SignalBase), t.Switch.prototype.open = function(t) {
            return this.gate.setValueAtTime(1, this.toSeconds(t)), this
        }, t.Switch.prototype.close = function(t) {
            return this.gate.setValueAtTime(0, this.toSeconds(t)), this
        }, t.Switch.prototype.dispose = function() {
            return t.prototype.dispose.call(this), this._writable("gate"), this.gate.dispose(), this.gate = null, this._thresh.dispose(), this._thresh = null, this
        }, t.Switch
    }), Module(function(t) {
        return t.Microphone = function(e) {
            t.Source.call(this), this._mediaStream = null, this._stream = null, this._constraints = {
                audio: !0
            };
            var i = this;
            MediaStreamTrack.getSources(function(t) {
                e < t.length && (i.constraints.audio = {
                    optional: [{
                        sourceId: t[e].id
                    }]
                })
            })
        }, t.extend(t.Microphone, t.Source), t.Microphone.prototype._start = function() {
            navigator.getUserMedia(this._constraints, this._onStream.bind(this), this._onStreamError.bind(this))
        }, t.Microphone.prototype._stop = function() {
            return this._stream.stop(), this
        }, t.Microphone.prototype._onStream = function(t) {
            this._stream = t, this._mediaStream = this.context.createMediaStreamSource(t), this._mediaStream.connect(this.output)
        }, t.Microphone.prototype._onStreamError = function(t) {
            console.error(t)
        }, t.Microphone.prototype.dispose = function() {
            return t.Source.prototype.dispose.call(this), this._mediaStream && (this._mediaStream.disconnect(), this._mediaStream = null), this._stream = null, this._constraints = null, this
        }, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, t.Microphone
    }), "function" == typeof define && define.amd ? define("Tone", [], function() {
        return Tone
    }) : "object" == typeof module ? module.exports = Tone : root.Tone = Tone
}(this);