<template lang="en">
    <div>
        <div class="container">
            <div class="form">
            <h1 class="title">Log In</h1>
            <form>
                <div class="form-element">
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="ahmed@gmail.com" class="input">
                </div>
                
                <div class="form-element">
                    <label for="pwd">Password:</label>
                    <input type="password" name="pwd" placeholder="eg. X0df!dl3SF" class="input">
                </div>
                
                <a href="#" class="form-link form-forget">Forgot Password?</a>
                <div class="form-element">
                    <input type="submit" name="submit" value="Login now" class="submit-button input">
                </div>
                <p class="form-end">Don't have an account? 
                    <router-link to="signup" class="form-link">Sign Up</router-link>
                </p>   
            </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {};
</script>
<style lang="en">
</style>