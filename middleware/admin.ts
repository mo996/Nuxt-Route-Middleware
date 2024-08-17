type User = {
  username: string;
  role: string;
};

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie<User>("user");
  if (user.value.role !== "admin") {
    throw showError({
      statusCode: 403,
      statusMessage:
        "Oops! You don't have permission to access this page. If you think this is a mistake, please contact the site administrator.",
    });
  }
});
