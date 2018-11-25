@extends('layouts.app') 
@section('styles')
<link rel="stylesheet" href="{{asset('css/emojionearea.min.css')}}">
<link rel="stylesheet" href="{{asset('css/style.css')}}">
@endsection
 
@section('content')
<div id="main">
</div>
@endsection
 
@section('scripts')
<script src="{{asset('js/moment.js')}}"></script>
<script src="{{asset('js/emojionearea.min.js')}}"></script>
<script src="{{asset('js/timeago.js')}}"></script>
<script src="{{asset('js/chatbox.js')}}"></script>
@endsection