<!doctype html>
<style>
div.title {
  position: absolute;
  top: 10px;
  margin: auto;
  width: 95%;
  padding: 10px;
  font-size: 40px;
  color: <?php echo $_POST["titlecolor"]; ?>;
} 
div.controls {
  position: absolute;
  top: 50px;
  margin: auto;
  width: 95%;
  padding: 10px;
  letter-spacing: 3px;
  color: <?php echo $_POST["ctrlcolor"]; ?>;
</style>

<center><div class="title"><?php echo $_POST["name"]; ?></div></center>
<br>
<center><div class="controls"><?php echo $_POST["ctrl"]; ?></div></center>
<br>
<br>
<p>Game Render and code</p>