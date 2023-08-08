<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\MenuRecipe;
use Faker\Factory;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use FakerRestaurant\Provider\en_US\Restaurant;

class MenuRecipeFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $date = new \DateTime();
        $categoryReferences = [];
        // Create fixture for food category
        $menuCategories = ["Drinks", "Children menus", "Main course", "Apetizers"];
        foreach($menuCategories as $menuCategory)
        {
            $category = new Category();
            $category->setMealCategory($menuCategory);
            
            $manager->persist($category);

            // Store category references instead of IDs
            $categoryReferences[] = $category;
        }

        $faker = Factory::create();
        $faker->addProvider(new Restaurant($faker));
        for ($i = 0; $i < 10; $i++){
            $menuRecipes = new MenuRecipe();

            $menuRecipes->setFoodName($faker->foodName());
            $menuRecipes->setCreateAt($date);
            $menuRecipes->setDescription($faker->realText($maxNbChars = 60, $indexSize = 2));
            $menuRecipes->setImage($faker->imageUrl(640, 480));

            // Get a random category reference from the array
            $randomCategoryReference = $faker->randomElement($categoryReferences);
            $menuRecipes->setCategory($randomCategoryReference);

            $manager->persist($menuRecipes);
        }

        $manager->flush();
    }
}
