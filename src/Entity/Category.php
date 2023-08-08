<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\CategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ApiResource]
#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $mealCategory = null;

    #[ORM\OneToMany(mappedBy: 'category', targetEntity: MenuRecipe::class, orphanRemoval: true)]
    private Collection $menuRecipes;

    public function __construct()
    {
        $this->menuRecipes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMealCategory(): ?string
    {
        return $this->mealCategory;
    }

    public function setMealCategory(string $mealCategory): static
    {
        $this->mealCategory = $mealCategory;

        return $this;
    }

    /**
     * @return Collection<int, MenuRecipe>
     */
    public function getMenuRecipes(): Collection
    {
        return $this->menuRecipes;
    }

    public function addMenuRecipe(MenuRecipe $menuRecipe): static
    {
        if (!$this->menuRecipes->contains($menuRecipe)) {
            $this->menuRecipes->add($menuRecipe);
            $menuRecipe->setCategory($this);
        }

        return $this;
    }

    public function removeMenuRecipe(MenuRecipe $menuRecipe): static
    {
        if ($this->menuRecipes->removeElement($menuRecipe)) {
            // set the owning side to null (unless already changed)
            if ($menuRecipe->getCategory() === $this) {
                $menuRecipe->setCategory(null);
            }
        }

        return $this;
    }
}
